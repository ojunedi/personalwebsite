import { useEffect, useRef } from 'react'

const CHARS = ' .\'`^",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$'
const COLS = 110
const ROW_SCALE = 0.46
const ASCII_CELL_PX = 12

const VERT_SRC = /* glsl */ `
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`

const FRAG_SRC = /* glsl */ `
precision highp float;

uniform sampler2D uPhoto;
uniform sampler2D uAscii;
uniform sampler2D uDepth;
uniform vec2 uMouse;
uniform vec2 uParallax;
uniform float uParallaxStrength;
uniform vec2 uResolution;
uniform float uRadius;
uniform float uSoftness;
uniform float uTime;

varying vec2 vUv;

float blobDist(vec2 p) {
  float r = length(p);
  float a = atan(p.y, p.x);
  float wobble =
      sin(a * 3.0 + uTime * 0.55) * 0.028 +
      sin(a * 5.0 - uTime * 0.42 + 1.7) * 0.020 +
      cos(a * 7.0 + uTime * 0.31 + 3.1) * 0.015 +
      sin(a * 11.0 + uTime * 0.66 + 0.4) * 0.009;
  return r - wobble;
}

void main() {
  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
  vec2 p = (vUv - uMouse) * aspect;
  float dist = blobDist(p);

  float mask = 1.0 - smoothstep(uRadius - uSoftness, uRadius + uSoftness, dist);
  float edge = smoothstep(uRadius - uSoftness, uRadius, dist)
             * (1.0 - smoothstep(uRadius, uRadius + uSoftness, dist));

  vec2 dir = normalize(p + 1e-5);

  vec2 jitter = vec2(
    sin(uTime * 1.8 + vUv.y * 70.0),
    cos(uTime * 1.4 + vUv.x * 70.0)
  ) * 0.0009;
  vec2 asciiUv = vUv + dir * edge * 0.022 + jitter;
  vec4 ascii = texture2D(uAscii, asciiUv);

  // sample depth, then offset photo UV inversely to mouse so near things drift
  // opposite the cursor like real parallax
  float depth = texture2D(uDepth, vUv).r;
  vec2 photoUv = vUv - uParallax * depth * uParallaxStrength;

  float ca = edge * 0.010;
  vec4 photo;
  photo.r = texture2D(uPhoto, photoUv + dir * ca).r;
  photo.g = texture2D(uPhoto, photoUv).g;
  photo.b = texture2D(uPhoto, photoUv - dir * ca).b;
  photo.a = 1.0;

  vec3 col = mix(ascii.rgb, photo.rgb, mask);
  float alpha = max(ascii.a, mask);
  gl_FragColor = vec4(col, alpha);
}
`

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error('shader compile error:', gl.getShaderInfoLog(sh))
  }
  return sh
}

function buildAsciiCanvas(img: HTMLImageElement): HTMLCanvasElement {
  const rows = Math.round(COLS * (img.naturalHeight / img.naturalWidth) * ROW_SCALE)

  const sample = document.createElement('canvas')
  sample.width = COLS
  sample.height = rows
  const sctx = sample.getContext('2d')!
  sctx.drawImage(img, 0, 0, COLS, rows)
  const { data } = sctx.getImageData(0, 0, COLS, rows)

  const cellW = ASCII_CELL_PX
  const cellH = Math.round(ASCII_CELL_PX / ROW_SCALE * 0.52)
  const outW = COLS * cellW
  const outH = rows * cellH

  const out = document.createElement('canvas')
  out.width = outW
  out.height = outH
  const ctx = out.getContext('2d')!
  ctx.clearRect(0, 0, outW, outH)

  const grad = ctx.createLinearGradient(0, 0, 0, outH)
  grad.addColorStop(0, '#646973')
  grad.addColorStop(1, '#BBCCD7')
  ctx.fillStyle = grad
  ctx.font = `${Math.round(cellW / 0.58)}px "Courier New", Courier, monospace`
  ctx.textBaseline = 'top'

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < COLS; x++) {
      const i = (y * COLS + x) * 4
      const b = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255
      const ch = CHARS[Math.floor(b * (CHARS.length - 1))]
      if (ch !== ' ') ctx.fillText(ch, x * cellW, y * cellH)
    }
  }
  return out
}

function buildSyntheticDepth(w: number, h: number): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')!
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, w, h)
  const cx = w * 0.5
  const cy = h * 0.38
  const grad = ctx.createRadialGradient(cx, cy, w * 0.04, cx, cy, w * 0.62)
  grad.addColorStop(0.0, 'rgb(255, 255, 255)')
  grad.addColorStop(0.35, 'rgb(190, 190, 190)')
  grad.addColorStop(0.7, 'rgb(70, 70, 70)')
  grad.addColorStop(1.0, 'rgb(0, 0, 0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)
  return c
}

function tryLoadDepth(): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => resolve(null)
    img.src = '/headshot-depth.jpg'
  })
}

function createTexture(gl: WebGLRenderingContext, source: TexImageSource) {
  const tex = gl.createTexture()!
  gl.bindTexture(gl.TEXTURE_2D, tex)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source)
  return tex
}

export default function PortraitReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { premultipliedAlpha: false, antialias: true, alpha: true })
    if (!gl) {
      console.warn('WebGL unavailable')
      return
    }

    const program = gl.createProgram()!
    gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT_SRC))
    gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG_SRC))
    gl.linkProgram(program)
    gl.useProgram(program)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    )
    const posLoc = gl.getAttribLocation(program, 'aPosition')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const uPhoto = gl.getUniformLocation(program, 'uPhoto')
    const uAscii = gl.getUniformLocation(program, 'uAscii')
    const uDepth = gl.getUniformLocation(program, 'uDepth')
    const uMouse = gl.getUniformLocation(program, 'uMouse')
    const uParallax = gl.getUniformLocation(program, 'uParallax')
    const uParallaxStrength = gl.getUniformLocation(program, 'uParallaxStrength')
    const uResolution = gl.getUniformLocation(program, 'uResolution')
    const uRadius = gl.getUniformLocation(program, 'uRadius')
    const uSoftness = gl.getUniformLocation(program, 'uSoftness')
    const uTime = gl.getUniformLocation(program, 'uTime')

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const target = { x: 0.5, y: 0.5 }
    const cursor = { x: 0.5, y: 0.5 }
    const parallaxTarget = { x: 0, y: 0 }
    const parallax = { x: 0, y: 0 }
    let targetR = 0
    let radius = 0
    let raf = 0
    let photoTex: WebGLTexture | null = null
    let asciiTex: WebGLTexture | null = null
    let depthTex: WebGLTexture | null = null

    function sizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas!.getBoundingClientRect()
      const w = Math.max(1, Math.round(rect.width * dpr))
      const h = Math.max(1, Math.round(rect.height * dpr))
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w
        canvas!.height = h
        gl!.viewport(0, 0, w, h)
      }
    }

    const img = new Image()
    img.src = '/headshot.jpg'
    img.crossOrigin = 'anonymous'
    img.onload = async () => {
      photoTex = createTexture(gl, img)
      asciiTex = createTexture(gl, buildAsciiCanvas(img))
      const realDepth = await tryLoadDepth()
      const depthSource: TexImageSource =
        realDepth ?? buildSyntheticDepth(img.naturalWidth, img.naturalHeight)
      depthTex = createTexture(gl, depthSource)
      sizeCanvas()

      const t0 = performance.now()
      const tick = (t: number) => {
        sizeCanvas()
        cursor.x += (target.x - cursor.x) * 0.09
        cursor.y += (target.y - cursor.y) * 0.09
        parallax.x += (parallaxTarget.x - parallax.x) * 0.06
        parallax.y += (parallaxTarget.y - parallax.y) * 0.06
        radius += (targetR - radius) * 0.1

        gl.clearColor(0, 0, 0, 0)
        gl.clear(gl.COLOR_BUFFER_BIT)

        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, photoTex)
        gl.uniform1i(uPhoto, 0)
        gl.activeTexture(gl.TEXTURE1)
        gl.bindTexture(gl.TEXTURE_2D, asciiTex)
        gl.uniform1i(uAscii, 1)
        gl.activeTexture(gl.TEXTURE2)
        gl.bindTexture(gl.TEXTURE_2D, depthTex)
        gl.uniform1i(uDepth, 2)

        gl.uniform2f(uMouse, cursor.x, cursor.y)
        gl.uniform2f(uParallax, parallax.x, parallax.y)
        gl.uniform1f(uParallaxStrength, 0.035)
        gl.uniform2f(uResolution, canvas.width, canvas.height)
        gl.uniform1f(uRadius, radius)
        gl.uniform1f(uSoftness, 0.07)
        gl.uniform1f(uTime, (t - t0) / 1000)

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    function handleMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      target.x = (e.clientX - rect.left) / rect.width
      target.y = 1 - (e.clientY - rect.top) / rect.height
    }
    function handleEnter(e: MouseEvent) {
      handleMove(e)
      cursor.x = target.x
      cursor.y = target.y
      targetR = 0.28
    }
    function handleLeave() {
      targetR = 0
    }

    function handleWindowMove(e: MouseEvent) {
      parallaxTarget.x = (e.clientX / window.innerWidth) * 2 - 1
      parallaxTarget.y = (e.clientY / window.innerHeight) * 2 - 1
    }

    canvas.addEventListener('mousemove', handleMove)
    canvas.addEventListener('mouseenter', handleEnter)
    canvas.addEventListener('mouseleave', handleLeave)
    window.addEventListener('mousemove', handleWindowMove)

    return () => {
      cancelAnimationFrame(raf)
      canvas.removeEventListener('mousemove', handleMove)
      canvas.removeEventListener('mouseenter', handleEnter)
      canvas.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('mousemove', handleWindowMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: 'clamp(280px, 36vw, 520px)',
        aspectRatio: '3648 / 4560',
        cursor: 'none',
      }}
    />
  )
}

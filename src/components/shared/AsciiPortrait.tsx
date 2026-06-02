import { useEffect, useState } from 'react'

const CHARS = ' .\'`^",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$'

function toBrightness(r: number, g: number, b: number): number {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255
}

export default function AsciiPortrait() {
  const [art, setArt] = useState('')

  useEffect(() => {
    const img = new window.Image()
    img.src = '/headshot.jpg'
    img.onload = () => {
      const COLS = 110
      const ROWS = Math.round(COLS * (img.naturalHeight / img.naturalWidth) * 0.46)

      const canvas = document.createElement('canvas')
      canvas.width = COLS
      canvas.height = ROWS
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0, COLS, ROWS)

      const { data } = ctx.getImageData(0, 0, COLS, ROWS)
      const lines: string[] = []

      for (let y = 0; y < ROWS; y++) {
        let row = ''
        for (let x = 0; x < COLS; x++) {
          const i = (y * COLS + x) * 4
          const b = toBrightness(data[i], data[i + 1], data[i + 2])
          row += CHARS[Math.floor(b * (CHARS.length - 1))]
        }
        lines.push(row)
      }

      setArt(lines.join('\n'))
    }
  }, [])

  if (!art) return null

  return (
    <pre
      aria-hidden
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: 'clamp(4.5px, 0.72vw, 8.5px)',
        lineHeight: 1.15,
        background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        whiteSpace: 'pre',
        userSelect: 'none',
        display: 'block',
        margin: 0,
      }}
    >
      {art}
    </pre>
  )
}

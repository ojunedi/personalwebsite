import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from '../components/shared/LiveProjectButton'
import FadeIn from '../components/shared/FadeIn'

interface Project {
  num: string
  category: string
  name: string
  col1img1: string
  col1img2: string
  col2img: string
}

const projects: Project[] = [
  {
    num: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    col1img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    col1img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    category: 'Client',
    name: 'Solaris Digital',
    col1img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
]

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const targetScale = 1 - (projects.length - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [targetScale, 1])

  return (
    <div ref={cardRef} style={{ height: '85vh' }}>
      <motion.div
        style={{
          scale,
          position: 'sticky',
          top: `${24 + index * 28}px`,
          background: '#0C0C0C',
        }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col gap-1">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2rem, 8vw, 100px)' }}
            >
              {project.num}
            </span>
            <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest">
              {project.category}
            </span>
            <span
              className="text-[#D7E2EA] font-medium"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
            >
              {project.name}
            </span>
          </div>
          <LiveProjectButton />
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-4" style={{ width: '40%' }}>
            <img
              src={project.col1img1}
              alt={`${project.name} preview 1`}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1img2}
              alt={`${project.name} preview 2`}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          <div style={{ width: '60%', minHeight: 'clamp(290px, 38vw, 570px)' }}>
            <img
              src={project.col2img}
              alt={`${project.name} preview 3`}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {projects.map((project, index) => (
        <ProjectCard key={project.num} project={project} index={index} />
      ))}
    </section>
  )
}

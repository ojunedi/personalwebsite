import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from '../components/shared/LiveProjectButton'
import FadeIn from '../components/shared/FadeIn'

interface Project {
  num: string
  category: string
  name: string
  link: string
  col1img1: string
  col1img2: string
  col2img: string
}

const projects: Project[] = [
  {
    num: '01',
    category: 'Chrome Extension',
    name: 'Leetcode Reminder',
    link: 'https://github.com/ojunedi',
    col1img1: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    col1img2: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    col2img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80',
  },
  {
    num: '02',
    category: 'Data Science',
    name: 'Game Analytics Tool',
    link: 'https://github.com/ojunedi',
    col1img1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    col1img2: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    col2img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
  },
  {
    num: '03',
    category: 'Systems / C++',
    name: 'Mini Raytracer',
    link: 'https://github.com/ojunedi/miniraytracer',
    col1img1: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    col1img2: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
    col2img: 'https://images.unsplash.com/photo-1608303588026-884930af2559?w=800&q=80',
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
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <LiveProjectButton />
          </a>
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

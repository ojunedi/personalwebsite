import FadeIn from '../components/shared/FadeIn'

const services = [
  {
    num: '01',
    name: 'AI & Machine Learning',
    desc: 'Building intelligent systems with PyTorch, TensorFlow, and LangChain — from AI-powered teaching assistants to production ML pipelines.',
  },
  {
    num: '02',
    name: 'Full-Stack Development',
    desc: 'End-to-end web applications using React, Django, Node.js, and cloud infrastructure including AWS RDS and PostgreSQL.',
  },
  {
    num: '03',
    name: 'Data Science',
    desc: 'Statistical analysis, synthetic data generation, and privacy-utility trade-off research using Python, Pandas, NumPy, and Matplotlib.',
  },
  {
    num: '04',
    name: 'Systems Programming',
    desc: 'Low-level C/C++ development — including a raytracing engine built from scratch simulating reflection, refraction, and shadows.',
  },
  {
    num: '05',
    name: 'Research',
    desc: 'Applied research at UMich SOCR on clinical data privacy, synthetic PHI generation, and parameter optimization for real-world datasets.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0C0C0C' }}
      >
        Skills
      </h2>
      <div className="max-w-5xl mx-auto w-full">
        {services.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(12,12,12,0.15)',
                borderBottom: i === services.length - 1 ? '1px solid rgba(12,12,12,0.15)' : 'none',
              }}
            >
              <span
                className="font-black leading-none min-w-[0.9em]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0C0C0C' }}
              >
                {service.num}
              </span>
              <div className="flex flex-col gap-2">
                <span
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: '#0C0C0C' }}
                >
                  {service.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', color: '#0C0C0C', opacity: 0.6 }}
                >
                  {service.desc}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

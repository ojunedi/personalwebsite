import '../styles/marquee.css'

const row1 = ['Python', 'C / C++', 'JavaScript', 'TypeScript', 'R', 'SQL', 'HTML / CSS']
const row2 = ['React', 'PyTorch', 'TensorFlow', 'Django', 'Node.js', 'Pandas', 'LangChain', 'NumPy', 'FastAPI', 'SKLearn', 'Flask', 'ChromaDB']

function MarqueeRow({ items, direction }: { items: string[]; direction: 'left' | 'right' }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-track-wrapper">
      <div className={`marquee-track marquee-${direction}`}>
        {doubled.map((item, i) => (
          <span key={i} className="marquee-pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <section
      className="pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-4 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </section>
  )
}

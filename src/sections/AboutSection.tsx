import FadeIn from '../components/shared/FadeIn';
import AnimatedText from '../components/shared/AnimatedText';
import ContactButton from '../components/shared/ContactButton';

const BASE_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';

const cornerImages = [
  {
    src: `${BASE_URL}/moon_icon.11395d36.png`,
    className:
      'absolute w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    delay: 0.1,
    x: -80,
  },
  {
    src: `${BASE_URL}/p59_1.4659672e.png`,
    className:
      'absolute w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    delay: 0.25,
    x: -80,
  },
  {
    src: `${BASE_URL}/lego_icon-1.703bb594.png`,
    className:
      'absolute w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    delay: 0.15,
    x: 80,
  },
  {
    src: `${BASE_URL}/Group_134-1.2e04f3ce.png`,
    className:
      'absolute w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    delay: 0.3,
    x: 80,
  },
] as const;

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      {cornerImages.map(({ src, className, delay, x }) => (
        <FadeIn key={src} delay={delay} x={x} y={0} duration={0.9} className={className}>
          <img src={src} alt="" className="w-full h-full object-contain" />
        </FadeIn>
      ))}

      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] z-10">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>
          <AnimatedText
            text="I'm a Computer Science and Mathematics student at the University of Michigan with a deep curiosity for where theory meets practice. I've built AI-powered tools, synthetic data systems, and shipped production software across ML, full-stack, and systems domains. I'm driven by hard problems and clean solutions."
            className="font-medium text-center leading-relaxed w-full max-w-[560px] text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.4} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

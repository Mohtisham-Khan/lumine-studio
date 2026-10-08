import { motion, useScroll, useTransform } from 'motion/react'
import { IMG } from '../images'
import { Img } from '../lib/Img'
import { PX } from '../lib/constants'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, -120])
  const lines = [['Interiors', ''], ['that hold', ''], ['quiet power.', 'italic text-sand']]
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen pt-[68px]">
      <div className={`order-2 md:order-1 bg-bg flex flex-col justify-between gap-16 py-14 md:py-20 ${PX} md:bd-r`}>
        <div>
          <p className="mono text-mut mb-8" style={{ letterSpacing: '0.18em' }}>Interior Design Studio · London & Milan</p>
          <h1 className="serif text-fg" style={{ fontSize: 'clamp(56px, 6.5vw, 96px)', lineHeight: 0.95, letterSpacing: '-0.01em' }}>
            {lines.map(([t, cls], i) => (
              <span key={t} className="block overflow-hidden pb-[0.08em]">
                <motion.span className={`block ${cls}`} initial={{ y: '110%' }} animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: i * 0.14 }}>{t}</motion.span>
              </span>
            ))}
          </h1>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.55 }}>
          <p className="text-mut text-[14px] leading-[1.85] max-w-[380px] mb-10">
            We create residential and commercial spaces that are refined without being cold, and liveable without compromise.
          </p>
          <div className="flex gap-[10px] flex-wrap">
            <a href="#projects" className="beam text-[12px] font-medium tracking-[0.04em] px-7 py-[13px] rounded-[1px]">Our projects</a>
            <a href="#contact" className="beam text-[12px] font-medium tracking-[0.04em] px-7 py-[13px] rounded-[1px]">Get in touch</a>
          </div>
        </motion.div>
      </div>
      <div className="order-1 md:order-2 relative overflow-hidden aspect-[4/3] md:aspect-auto bg-raised">
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <Img src={IMG.hero} alt="Dimly lit living room with moody lighting by Lumine Studio" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(16,15,13,0.2) 0%, rgba(16,15,13,0.35) 60%, rgba(16,15,13,0.85) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end">
          <div>
            <p className="mono text-mut">Featured project</p>
            <p className="serif italic text-fg text-[18px] mt-2">The Chelsea House, 2025</p>
          </div>
          <a href="#projects" className="text-mut hover-sand text-[11px] uppercase tracking-[0.08em] pb-px transition-colors" style={{ borderBottom: '1px solid hsl(var(--border))' }}>View case →</a>
        </div>
      </div>
    </section>
  )
}
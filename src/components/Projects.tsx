import { useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'motion/react'
import { PROJECTS, SPAN } from '../data'
import { reveal, sandLine } from '../lib/motion'
import { Img } from '../lib/Img'
import { PX } from '../lib/constants'

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState(false)
  const cfg = { stiffness: 350, damping: 30 }
  const cx = useSpring(useMotionValue(0), cfg)
  const cy = useSpring(useMotionValue(0), cfg)
  const move = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    cx.set(e.clientX - r.left - 40); cy.set(e.clientY - r.top - 40)
  }
  return (
    <section id="projects" className={`bg-bg py-20 md:py-[100px] ${PX}`}>
      <div className="flex justify-between items-baseline mb-14">
        <motion.div {...reveal()}>
          {sandLine()}
          <h2 className="serif text-fg" style={{ fontSize: 'clamp(38px, 4vw, 52px)', lineHeight: 1 }}>Selected<br /><em className="text-sand">projects.</em></h2>
        </motion.div>
        <button className="beam text-[11px] uppercase tracking-[0.1em] px-5 py-[10px] rounded-[2px]">All projects →</button>
      </div>
      <div ref={ref} onMouseMove={move} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.div key={p.name} {...reveal(i % 2)} whileHover={{ y: -5 }}
            className={`${SPAN[i]} photo bg-raised bd hover:!border-[hsl(var(--sand-muted))] rounded-[2px] p-6 md:p-[30px] overflow-hidden flex ${Math.floor(i / 2) % 2 ? 'flex-col-reverse' : 'flex-col'} justify-center gap-[30px] cursor-pointer transition-colors`}>
            <div>
              <span className="mono text-mut">{p.tag}</span>
              <h3 className="serif italic text-fg text-[24px] leading-[1.2] mt-2 mb-2">{p.name}</h3>
              <p className="text-mut text-[14px] leading-[1.7] max-w-[420px]">{p.desc}</p>
            </div>
            <div className="relative h-[260px] lg:h-[320px] rounded-[2px] overflow-hidden bg-surf bd shrink-0">
              <Img src={p.img} alt={`${p.name} — ${p.tag}`} />
            </div>
          </motion.div>
        ))}
        <motion.div style={{ x: cx, y: cy }} animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.6 }}
          className="hidden lg:flex pointer-events-none absolute top-0 left-0 w-20 h-20 rounded-full items-center justify-center mono z-10">
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#fff', mixBlendMode: 'difference' }} />
          <span className="relative" style={{ color: '#fff', mixBlendMode: 'difference' }}>View →</span>
        </motion.div>
      </div>
    </section>
  )
}
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { Sparkle } from 'lucide-react'
import { BENEFITS, TAGS } from '../data'
import { reveal, sandLine } from '../lib/motion'
import { PX } from '../lib/constants'

export default function Philosophy() {
  const phRef = useRef<HTMLDivElement>(null)
  const [wide, setWide] = useState(false)
  useEffect(() => {
    const f = () => setWide(window.innerWidth >= 1024)
    f(); window.addEventListener('resize', f)
    return () => window.removeEventListener('resize', f)
  }, [])
  const { scrollYProgress } = useScroll({ target: phRef, offset: ['start start', 'end end'] })
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const listY = useTransform(scrollYProgress, [0, 1], ['0%', '-45%'])
  return (
    <section id="services" className={`bg-surf bd-b py-20 md:py-[100px] ${PX}`}>
      <div className="flex flex-col lg:flex-row items-start md:justify-center justify-start gap-14">
        <div className="w-full lg:max-w-[600px] lg:sticky lg:top-[120px] self-start">
          <motion.div {...reveal()} className="inline-flex items-center gap-2 bd bg-raised rounded-full px-4 py-2 mb-8">
            <Sparkle size={14} className="text-sand fill-current" /><span className="mono text-mut">Philosophy</span>
          </motion.div>
          <motion.h2 {...reveal(1)} className="serif italic text-fg mb-6" style={{ fontSize: 'clamp(42px, 4.5vw, 62px)', lineHeight: 1.05 }}>
            Design is the art of knowing what to <em className="text-sand">leave out.</em>
          </motion.h2>
          <motion.p {...reveal(2)} className="text-mut text-[15px] leading-[1.9] max-w-[520px] mb-4">
            We work with clients who believe the best spaces are the ones you don't have to explain.
          </motion.p>
          <motion.p {...reveal(3)} className="text-mut text-[14px] leading-[1.9] max-w-[520px] mb-12">
            Lumine Studio works with private homeowners, developers, and hospitality brands. Our projects range from single-room transformations to multi-year architectural collaborations.
          </motion.p>
          <div className="flex flex-wrap gap-3">
            {TAGS.map((t, i) => (
              <motion.span key={t} {...reveal(4 + i * 0.4)} className="bd rounded-full px-5 py-[10px] text-mut hover-sand text-[13px] transition-colors cursor-default">{t}</motion.span>
            ))}
          </div>
        </div>
        <div ref={phRef} className="relative w-full lg:max-w-[540px] lg:h-[220vh]">
          <div className="lg:sticky lg:top-[120px] lg:h-[620px] lg:overflow-hidden flex items-start w-full relative">
            <div className="hidden lg:block absolute top-0 inset-x-0 h-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(hsl(var(--surface)), transparent)' }} />
            <div className="hidden lg:block relative w-[2px] mr-10 self-stretch" style={{ background: 'hsl(var(--sand) / 0.15)' }}>
              <motion.div style={{ scaleY: lineScale, originY: 0, background: 'hsl(var(--sand))' }} className="absolute inset-0" />
            </div>
            <motion.div style={{ y: wide ? listY : 0 }} className="flex flex-col gap-10 lg:gap-14 lg:pt-20 lg:pb-24 w-full">
              {BENEFITS.map(([Icon, t, d], i) => (
                <motion.div key={t} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i, ease: 'easeOut' }} className="flex gap-6">
                  <div className="shrink-0 w-10 h-10 bg-raised bd rounded-[2px] flex items-center justify-center"><Icon size={18} className="text-sand" strokeWidth={1.25} /></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="serif italic text-fg text-[22px] md:text-[26px] leading-[1.2]">{t}</h3>
                    <p className="text-mut text-[14px] leading-[1.8]">{d}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
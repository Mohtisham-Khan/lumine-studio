import { motion } from 'motion/react'
import { ArrowUpRight, Sparkle, Star } from 'lucide-react'
import { TESTIMONIALS, FEATURED, REVIEW_STATS } from '../data'
import { IMG } from '../images'
import { reveal } from '../lib/motion'
import { Img } from '../lib/Img'
import { PX } from '../lib/constants'

export default function Testimonials() {
  return (
    <section className={`bg-bg bd-t py-20 md:py-[100px] ${PX}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <motion.div {...reveal()}>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-11 h-11 rounded-full bd bg-raised flex items-center justify-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}>
                <Sparkle size={18} className="text-sand fill-current" />
              </motion.div>
            </div>
            <span className="bd bg-raised rounded-full px-5 py-3 mono text-mut">Testimonials</span>
          </div>
          <h2 className="serif italic text-fg" style={{ fontSize: 'clamp(38px, 4vw, 54px)', lineHeight: 1.1 }}>What clients say<br /><em className="text-sand">about our work.</em></h2>
        </motion.div>
        <motion.p {...reveal(1)} className="text-mut text-[14px] leading-[1.85] max-w-[280px] md:text-right">
          Every project is built on listening, restraint, and trust — shared by the people who live in the spaces.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        <motion.div {...reveal(0)} className="bg-raised bd rounded-[2px] p-8 flex flex-col min-h-[480px] lg:h-[560px]">
          <div className="flex items-start gap-3 mb-7">
            <div className="flex items-baseline gap-1"><span className="serif text-fg text-[56px] leading-none">4.9</span><span className="mono text-mut">/5</span></div>
            <p className="text-mut text-[13px] leading-[1.4] pt-2">Client satisfaction,<br />from verified reviews</p>
          </div>
          <div className="flex flex-col gap-[14px] mb-8">
            {REVIEW_STATS.map(([Icon, t]) => (
              <div key={t} className="flex items-center gap-[10px] text-mut text-[13px]"><Icon size={16} className="text-sand shrink-0" strokeWidth={1.25} />{t}</div>
            ))}
          </div>
          <div className="mt-auto pt-6 bd-t">
            <p className="text-mut text-[13px] mb-1">Ready to start your own project?</p>
            <p className="serif italic text-fg text-[22px] mb-5">Let's talk.</p>
            <div className="flex items-center gap-2">
              <a href="#contact" className="beam text-[12px] font-medium tracking-[0.04em] px-7 py-[13px] rounded-[1px]">Enquire</a>
              <a href="#contact" className="w-11 h-11 rounded-full bd text-mut hover-sand flex items-center justify-center transition-colors"><ArrowUpRight size={18} strokeWidth={1.25} /></a>
            </div>
          </div>
        </motion.div>
        <motion.div {...reveal(1)} className="photo relative rounded-[2px] overflow-hidden bg-raised bd min-h-[480px] lg:h-[560px]">
          <div className="absolute inset-0"><Img src={IMG.quote} alt="Dim-lit dining room by Lumine Studio" /></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(16,15,13,0.95) 0%, rgba(16,15,13,0.45) 45%, transparent 100%)' }} />
          <div className="absolute inset-x-8 bottom-8">
            <p className="serif italic text-fg text-[20px] leading-[1.5] mb-3">“{FEATURED.q}”</p>
            <p className="mono text-mut">— {FEATURED.by}</p>
          </div>
        </motion.div>
        <motion.div {...reveal(2)} className="md:col-span-2 lg:col-span-1 relative overflow-hidden bd rounded-[2px] bg-surf  min-h-fit md:h-[520px]">
          <div className="marquee-up flex flex-col gap-4 p-2">
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map(([n, loc, q], i) => (
              <div key={i} className="bg-bg bd rounded-[2px] p-6 flex flex-col shrink-0">
                <div className="flex gap-0.5 mb-3">{[0, 1, 2, 3, 4].map((k) => <Star key={k} size={12} className="text-sand fill-current" />)}</div>
                <p className="serif italic text-fg text-[15px] leading-[1.7] mb-4">“{q}”</p>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center mono text-sand" style={{ background: 'hsl(var(--sand-light))' }}>{n.replace(/[^A-Z]/g, '').slice(0, 2)}</span>
                  <div className="leading-tight"><p className="text-fg text-[13px] font-medium">{n}</p><p className="mono text-mut mt-1">{loc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
import { motion } from 'motion/react'
import { TEAM, SOCIALS } from '../data'
import { reveal, sandLine } from '../lib/motion'
import { Img } from '../lib/Img'
import { PX } from '../lib/constants'

export default function Studio() {
  return (
    <section id="studio" className={`bg-surf bd-t py-20 md:py-[100px] overflow-hidden ${PX}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-end mb-16 md:mb-20">
        <motion.div {...reveal()}>
          {sandLine()}
          <span className="mono text-mut block mb-5">The Studio</span>
          <h2 className="serif italic text-fg" style={{ fontSize: 'clamp(42px, 5vw, 68px)', lineHeight: 1.05 }}>A small studio. <em className="text-sand">An outsized</em> standard.</h2>
        </motion.div>
        <motion.div {...reveal(1)} className="flex flex-col gap-5 text-mut text-[14px] leading-[1.9] max-w-[560px]">
          <p>Lumine Studio was founded in 2013 by creative director Isabelle Fontaine. What started as a one-person practice in East London has grown into a team of seven — still small enough that Isabelle works on every project.</p>
          <p>We believe in restraint, in materials that age beautifully, and in spaces that feel generous even when they're compact. Every project we take on receives our full attention — which is why we take on fewer than most.</p>
        </motion.div>
      </div>
      <div className="flex overflow-x-auto no-scrollbar gap-8 lg:gap-10 pb-8 snap-x snap-mandatory cursor-grab active:cursor-grabbing">
        {TEAM.map(([n, r, email, img], i) => (
          <motion.div key={n} initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="photo flex-none w-[85%] sm:w-[48%] lg:w-[calc(25%-30px)] snap-start">
            <div className="relative aspect-[1/1.25] rounded-[2px] overflow-hidden bg-raised bd mb-7"><Img src={img} alt={`${n}, ${r}`} /></div>
            <div className="flex flex-col items-start px-1">
              <h3 className="serif italic text-fg text-[24px] leading-[1.2] mb-1">{n}</h3>
              <a href={`mailto:${email}`} className="text-sand text-[13px] mb-2 hover:opacity-80 transition-opacity">{email}</a>
              <p className="mono text-mut mb-5">{r}</p>
              <div className="flex items-center gap-5">
                {SOCIALS.map((so) => <a key={so} href="#" className="mono text-sub hover-sand transition-colors duration-300" style={{ letterSpacing: '0.1em' }}>{so}</a>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <a href="#" className="inline-block mt-6 text-mut hover-fg text-[12px] pb-px" style={{ borderBottom: '1px solid hsl(var(--border))' }}>Meet the full team →</a>
    </section>
  )
}
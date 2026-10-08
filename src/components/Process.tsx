import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { STEPS, STEP_IMG } from '../data'
import { reveal, sandLine } from '../lib/motion'
import { Img } from '../lib/Img'
import { PX } from '../lib/constants'

export default function Process() {
  const [step, setStep] = useState(0)
  const [paused, setPaused] = useState(false)
  return (
    <section className={`bg-raised bd-t py-20 md:py-[100px] overflow-hidden ${PX}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
        <motion.div {...reveal()} className="max-w-[600px]">
          {sandLine()}
          <h2 className="serif italic text-fg" style={{ fontSize: 'clamp(40px, 4vw, 56px)', lineHeight: 1.1 }}>How a <em className="text-sand">Lumine</em> project comes together.</h2>
        </motion.div>
        <motion.p {...reveal(1)} className="text-mut text-[14px] leading-[1.85] max-w-[320px]">Every project is different. The process below is our constant.</motion.p>
      </div>
      <motion.div {...reveal(1)}>
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-10"
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="flex gap-6 w-fit px-6" style={{ animation: 'marquee-x 60s linear infinite', animationPlayState: paused ? 'paused' : 'running' }}>
          {[...STEPS, ...STEPS, ...STEPS, ...STEPS].map(([n, d], idx) => {
            const k = idx % STEPS.length, active = step === k
            return (
              <div key={idx} onMouseEnter={() => setStep(k)} className="relative w-[274px] h-[326px] rounded-[2px] overflow-hidden shrink-0 bd transition-all duration-300 ease-in-out"
                style={{ transform: active ? 'scale(1.03)' : 'scale(1)', boxShadow: active ? '0 12px 30px rgba(0,0,0,0.4)' : 'none', zIndex: active ? 10 : 1 }}>
                <AnimatePresence mode="wait">
                  {active ? (
                    <motion.div key="on" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 p-6 flex flex-col justify-between items-center text-center cursor-default"
                      style={{ background: 'hsl(var(--sand-light))', boxShadow: 'inset 0 0 0 1px hsl(var(--sand-muted))' }}>
                      <div>
                        <span className="mono text-sand">Step 0{k + 1}</span>
                        <h3 className="serif italic text-fg text-[26px] leading-[1.2] mt-1">{n}</h3>
                      </div>
                      <p className="text-mut text-[13px] leading-[1.65]">{d}</p>
                      <span className="serif italic text-[44px] leading-none" style={{ color: 'hsl(var(--sand) / 0.4)' }}>0{k + 1}</span>
                    </motion.div>
                  ) : (
                    <motion.div key="off" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                      <motion.div className="relative w-full h-full" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}>
                        <Img src={STEP_IMG[k]} alt={`${n} — Lumine process`} />
                      </motion.div>
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, hsl(var(--background)) 100%)' }} />
                      <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col gap-1 items-center text-center">
                        <span className="mono text-mut">Step 0{k + 1}</span>
                        <h3 className="serif italic text-fg text-[24px] leading-[1.2]">{n}</h3>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
      </motion.div>
      <motion.div {...reveal(2)} className="flex flex-col gap-2">
        <h4 className="serif italic text-fg text-[26px] md:text-[30px] leading-[1.2]">Ready for the first conversation?</h4>
        <p className="text-mut text-[14px] leading-[1.8]">
          Start with our{' '}
          <a href="#contact" className="relative inline-block font-medium text-fg group">
            enquiry form
            <span className="absolute bottom-0 left-0 w-full h-px origin-left transition-transform duration-300 scale-x-100 group-hover:scale-x-0" style={{ background: 'hsl(var(--sand))' }} />
            <span className="absolute bottom-0 right-0 w-full h-px origin-right transition-transform duration-300 scale-x-0 group-hover:scale-x-100" style={{ background: 'hsl(var(--sand))' }} />
          </a>{' '}and we'll take it from there.
        </p>
      </motion.div>
    </section>
  )
}
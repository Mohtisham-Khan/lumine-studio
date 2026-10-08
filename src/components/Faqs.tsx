import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../data'
import { reveal, sandLine } from '../lib/motion'
import { Img } from '../lib/Img'
import { PX } from '../lib/constants'

export default function Faqs() {
  const [faq, setFaq] = useState<number | null>(1)
  return (
    <section className={`bg-surf bd-t py-20 md:py-[100px] ${PX}`}>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14">
        <motion.div {...reveal()} className="max-w-[640px]">
          {sandLine()}
          <span className="mono text-mut block mb-4">FAQs</span>
          <h2 className="serif italic text-fg" style={{ fontSize: 'clamp(40px, 4.5vw, 62px)', lineHeight: 1.05 }}>Clear answers, <em className="text-sand">before you ask.</em></h2>
        </motion.div>
        <motion.p {...reveal(1)} className="text-mut text-[14px] leading-[1.85] max-w-[420px]">
          From timelines and materials to fees and process — the questions we hear most in a first conversation.
        </motion.p>
      </div>
      <div className="bd-b">
        {FAQS.map(([q, a, img], i) => {
          const open = faq === i
          return (
            <motion.div key={q} {...reveal(i * 0.8)} className="bd-t group">
              <button type="button" onClick={() => setFaq(open ? null : i)} className="w-full py-7 md:py-8 flex items-center justify-between gap-4 text-left cursor-pointer">
                <div className="flex items-center gap-6 md:gap-12 flex-1">
                  <span className={`serif italic text-[24px] md:text-[32px] shrink-0 transition-colors duration-300 ${open ? 'text-sand' : 'text-sub'}`}>0{i + 1}</span>
                  <h3 className={`serif italic transition-all duration-300 ${open ? 'text-fg text-[26px] md:text-[38px] leading-[1.15]' : 'text-mut group-hover:text-fg text-[22px] md:text-[28px] leading-[1.2]'}`}>{q}</h3>
                </div>
                <span className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? 'rotate-180 text-sand' : 'bd text-mut group-hover:text-fg'}`}
                  style={open ? { background: 'hsl(var(--sand-light))', border: '1px solid hsl(var(--sand-muted))' } : undefined}>
                  <ChevronDown size={20} strokeWidth={1.25} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                    <div className="md:pl-[88px] pb-8 md:pb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-12">
                      <p className="text-mut text-[14px] md:text-[15px] leading-[1.9] max-w-[640px]">{a}</p>
                      <div className="photo relative w-full md:w-[280px] lg:w-[320px] h-[100px] rounded-full overflow-hidden bd bg-raised shrink-0"><Img src={img} alt={q} /></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
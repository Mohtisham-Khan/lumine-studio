import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data'
import { PX } from '../lib/constants'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between py-[22px] ${PX} bd-b`}
        style={{ background: 'hsl(var(--background) / 0.92)', backdropFilter: 'blur(16px)' }}>
        <a href="#" className="serif italic text-fg text-[19px] tracking-[0.04em]">Lumine Studio</a>
        <div className="hidden md:flex gap-9">
          {NAV.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-mut hover-fg text-[12px] tracking-[0.04em] font-normal transition-colors">{l}</a>
          ))}
        </div>
        <a href="#contact" className="beam hidden md:block text-[12px] font-normal px-[22px] py-[9px] rounded-[2px]">Enquire</a>
        <button className="md:hidden text-fg" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={20} strokeWidth={1} /></button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg flex flex-col justify-between p-6">
            <button className="self-end text-fg" onClick={() => setOpen(false)} aria-label="Close menu"><X size={22} strokeWidth={1} /></button>
            <div className="flex flex-col gap-5">
              {NAV.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="serif italic text-fg text-5xl">{l}</a>
              ))}
            </div>
            <a href="#contact" onClick={() => setOpen(false)} className="beam block text-center text-[12px] py-4 rounded-[2px]">Enquire</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
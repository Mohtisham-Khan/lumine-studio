import { motion } from 'motion/react'
import { CREDS } from '../data'
import { reveal } from '../lib/motion'
import { PX } from '../lib/constants'

export default function Credentials() {
  return (
    <section className={`bg-surf bd-t bd-b py-8 ${PX}`}>
      <div className="grid grid-cols-2 gap-y-8 md:flex md:gap-16 md:items-center md:flex-wrap">
        {CREDS.map(([n, l], i) => (
          <motion.div key={l} {...reveal(i)} className="flex md:gap-16 items-center">
            <div className="flex flex-col gap-[5px]">
              <span className="serif text-fg text-[28px]">{n}</span>
              <span className="mono text-mut" style={{ letterSpacing: '0.12em' }}>{l}</span>
            </div>
            {i < CREDS.length - 1 && <span className="hidden md:block w-px h-10" style={{ background: 'hsl(var(--border))' }} />}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
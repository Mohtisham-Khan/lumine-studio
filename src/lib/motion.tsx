import { motion } from 'motion/react'

export const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 32 }, whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 },
})

export const sandLine = (center = false) => (
  <motion.div
    initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    style={{ transformOrigin: center ? 'center' : 'left center', width: 40, height: 1, background: 'hsl(var(--sand))', marginBottom: 16, ...(center && { margin: '0 auto 16px' }) }}
  />
)
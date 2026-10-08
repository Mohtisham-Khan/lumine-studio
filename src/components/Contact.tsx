import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, Phone, Mail } from 'lucide-react'
import { ROWS, REQUIRED, INFO, ADDR } from '../data'
import { IMG } from '../images'
import { reveal } from '../lib/motion'
import { Img } from '../lib/Img'
import { PX } from '../lib/constants'

export default function Contact() {
  const [form, setForm] = useState<Record<string, string>>({})
  const [errs, setErrs] = useState<string[]>([])
  const [sent, setSent] = useState(false)
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value })); setErrs((x) => x.filter((n) => n !== name))
  }
  const submit = (e: React.FormEvent) => {
    e.preventDefault(); setSent(false)
    const bad = REQUIRED.filter((k) => !form[k]?.trim())
    setErrs(bad); if (!bad.length) setSent(true)
  }
  return (
    <section id="contact" className={`bg-bg bd-t py-20 md:py-[100px] ${PX}`}>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[60px] items-end">
        <motion.div {...reveal()} className="relative w-full lg:w-[520px] h-[520px] md:h-[680px] rounded-[2px] overflow-hidden bd bg-raised shrink-0">
          <div className="absolute inset-0"><Img src={IMG.workspace} alt="Moody cafe interior by Lumine Studio" /></div>
          <div className="absolute top-0 inset-x-0 p-6 grid grid-cols-2 gap-4" style={{ background: 'linear-gradient(to bottom, rgba(16,15,13,0.9), transparent)' }}>
            {ADDR.map(([c, a]) => (
              <div key={c}><div className="mono text-mut mb-1">{c}</div><div className="text-fg text-[12px] leading-[1.5]">{a}</div></div>
            ))}
          </div>
          <div className="absolute bottom-0 inset-x-0 flex flex-col sm:flex-row sm:h-20">
            {INFO.map(([Icon, l, v], i) => (
              <div key={l} className="flex-1 flex items-center gap-[14px] px-6 py-4 sm:py-0" style={i ? { background: 'hsl(var(--sand))' } : { background: 'hsl(var(--surface-raised))' }}>
                <span className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0" style={{ background: 'hsl(var(--background))' }}>
                  <Icon size={16} strokeWidth={1.25} style={{ color: i ? 'hsl(var(--sand))' : 'hsl(var(--cream))' }} />
                </span>
                <span className="flex flex-col">
                  <span className="mono" style={{ color: i ? 'hsl(var(--background) / 0.7)' : 'hsl(var(--foreground-muted))' }}>{l}</span>
                  <span className="text-[13px] font-medium" style={{ color: i ? 'hsl(var(--background))' : 'hsl(var(--foreground))' }}>{v}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...reveal(1)} className="flex-1 w-full lg:max-w-[580px]">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-[26px] h-[26px] rounded-full bd bg-raised flex items-center justify-center"><span className="w-[6px] h-[6px] rounded-full" style={{ background: 'hsl(var(--sand))' }} /></span>
            <span className="mono text-mut" style={{ letterSpacing: '0.16em' }}>Contact</span>
          </div>
          <h2 className="serif italic text-fg" style={{ fontSize: 'clamp(44px, 5vw, 68px)', lineHeight: 0.95 }}>Start a <em className="text-sand">conversation.</em></h2>
          <p className="text-mut text-[14px] leading-[1.85] mt-6 mb-8">We take on a limited number of projects each year. If you're considering a renovation, refurbishment, or new build, we'd love to hear about it — even if it's early days.</p>
          <form noValidate onSubmit={submit} className="flex flex-col gap-5">
            {ROWS.map((row, r) => (
              <div key={r} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {row.map(([name, label, kind, extra]) => (
                  <label key={name} className="flex flex-col gap-[6px]">
                    <span className="mono text-fg">{label}{REQUIRED.includes(name) && ' *'}</span>
                    {typeof extra === 'string' ? (
                      <input name={name} type={kind} placeholder={extra} value={form[name] ?? ''} onChange={change} className={`field${errs.includes(name) ? ' err' : ''}`} />
                    ) : (
                      <select name={name} value={form[name] ?? ''} onChange={change} className={`field${errs.includes(name) ? ' err' : ''}`}>
                        <option value="">Select one...</option>
                        {extra.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    )}
                  </label>
                ))}
              </div>
            ))}
            <label className="flex flex-col gap-[6px]">
              <span className="mono text-fg">Tell us about your project</span>
              <textarea name="message" rows={4} value={form.message ?? ''} onChange={change} className="field" />
            </label>
            <button type="submit" className="beam w-full flex items-center justify-between rounded-[2px] py-[10px] pl-7 pr-[10px] text-[13px] font-medium uppercase tracking-[0.06em]">
              <span>Send enquiry</span>
              <span className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--sand))', color: 'hsl(var(--background))' }}><ArrowUpRight size={18} strokeWidth={1.5} /></span>
            </button>
            {errs.length > 0 && <p className="text-[13px]" style={{ color: 'hsl(0 55% 62%)' }}>Please complete the highlighted fields.</p>}
            {sent && <p className="text-sand text-[13px]">✓ Thank you — we'll be in touch within two working days.</p>}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'motion/react'
import { Menu, X, MapPin, Shield, Clock, ArrowUpRight, Star, Sparkle, ChevronDown, Phone, Mail, Layers, Building2, Armchair, Gem, Eye, KeyRound } from 'lucide-react'
import { IMG } from './images'

/* ---------- data ---------- */
const NAV = ['Projects', 'Services', 'Studio', 'Journal', 'Contact']
const CREDS = [
  ['140+', 'Projects completed'], ['12', 'Years of practice'], ['9', 'Countries'],
  ['4.9★', 'Client satisfaction'], ['London · Milan · Paris', 'Studio locations'],
]
const BENEFITS = [
  [Layers, 'Full-service design', 'From initial concept through to final styling and handover. We handle architecture, interiors, furniture, and art.'],
  [Building2, 'Architecture & structure', 'We work from the shell inward — planning permissions, structural changes, materials, finishes, and built-in joinery.'],
  [Armchair, 'Custom furniture & sourcing', "Bespoke pieces made to our design, and curated works from the makers and galleries we've spent years building relationships with."],
  [Gem, 'Materials that age beautifully', 'Oak, stone, brass and linen chosen with restraint — finishes that gain character with time rather than lose it.'],
  [Eye, 'Fewer projects, fuller attention', 'We take on fewer projects than most, and Isabelle works on every one of them from first conversation to final styling.'],
  [KeyRound, 'Handed over, not handed off', "We manage procurement, contractors, and installation. You hand over the key and pick it up when it's finished."],
] as const
const TAGS = ['Full-service design', 'Architecture', 'Joinery', 'Furniture & art', 'Hospitality']
// Add image URLs in `img` (briefs kept as comments for reference)
const PROJECTS = [
  { name: 'The Chelsea House', tag: 'London · Residential', img: IMG.pr1, desc: 'A quiet townhouse of cream walls, oak joinery and afternoon light.' }, // minimalist apartment, cream walls, oak joinery, pivot door
  { name: 'Palazzo Bianco', tag: 'Milan · Residential', img: IMG.pr2, desc: 'Candlelit dining beneath a low pendant, in marble and bouclé.' },     // dark dining room, round marble table, bouclé chairs
  { name: 'Rue du Temple', tag: 'Paris · Residential', img: IMG.pr3, desc: 'A serene bedroom of linen, pale oak and soft marble.' },      // bedroom, linen curtains, pale oak headboard wall
  { name: 'The Carlow Kitchen', tag: 'Dublin · Residential', img: IMG.pr4, desc: 'Dark stone, brass fittings and warm task lighting.' },// dark stone island, brass fittings
  { name: 'Hotel Solaire', tag: 'Lisbon · Hospitality', img: IMG.pr5, desc: 'A dramatic lobby of dark stone and tall tropical green.' },     // hotel lobby, dark stone floors, tall plant
  { name: 'The Dover Gallery', tag: 'London · Commercial', img: IMG.pr6, desc: 'Paneled walls, an antique desk and a library made to be lived in.' },  // dark paneled study, antique desk, library shelving
]
const SPAN = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7', 'lg:col-span-7', 'lg:col-span-5']
const STEPS = [
  ['Discovery', 'We meet in person or remotely to understand how you use your space, what you love, and what isn\'t working. No briefs — just conversation.'],
  ['Concept', 'We develop two to three spatial concepts: mood boards, material palettes, and rough floor plans. You choose a direction and we refine.'],
  ['Design', 'Detailed drawings, material specifications, furniture selections, and bespoke joinery briefs. Everything documented before anything is ordered.'],
  ['Delivery', 'We manage procurement, contractors, and installation. You hand over the key and pick it up when it\'s finished.'],
]
const STEP_IMG = [IMG.p1, IMG.studio, IMG.p6, IMG.p5]
const TESTIMONIALS = [
  ['Helena M.', 'London', 'We handed Lumine a shell of an apartment and got back a home we didn\'t know we were capable of living in. Every decision they made was right.'],
  ['Francesco & Giulia T.', 'Milan', 'Three studios pitched us. Lumine was the only one that listened before they talked. The result is something we couldn\'t have imagined ourselves.'],
  ['James K.', 'Dublin', 'I\'ve renovated twice before, both times with other designers. This was the first project that finished on time, on budget, and exactly as specified. I was genuinely shocked.'],
]
const FEATURED = { q: 'Isabelle listened for an hour before she drew a single line. The house feels like it was always ours.', by: 'Sofia R., Rue du Temple, Paris — 2025' }
const REVIEW_STATS = [[MapPin, '140+ projects delivered across 9 countries'], [Shield, 'On time, on budget, exactly as specified'], [Clock, '12+ years of considered practice']] as const
const FAQS = [
  ['How long does a typical project take?', 'Single-room transformations usually take three to four months; full residences run eight to twelve from first concept to handover. Everything is documented before anything is ordered, so timelines stay honest.', IMG.p1],
  ['How does custom furniture and joinery work?', 'Each piece is drawn for the room it lives in — built-in oak joinery, bespoke seating, shelving and beds — then made by the workshops we have worked with for years.', IMG.p6],
  ['What materials do you specify?', 'Materials that age beautifully: oak, stone, marble, brass, lime plaster and linen. We favour honest finishes that gain character rather than lose it.', IMG.p4],
  ['Do you work outside London and Milan?', 'Yes. We have completed projects in nine countries and travel for site visits, with remote design reviews in between. We take on fewer projects than most so each gets our full attention.', IMG.p5],
  ['How are fees structured?', 'A fixed design fee agreed after our first conversation, with procurement and project management scoped separately. You always know the cost of a decision before you make it.', IMG.p3],
] as const
const TEAM = [
  ['Isabelle Fontaine', 'Creative Director', 'isabelle@luminestudio.co.uk', IMG.t1],
  ['Marco Riva', 'Senior Designer', 'marco@luminestudio.co.uk', IMG.t2],
  ['Clara Hennessy', 'Project Manager', 'clara@luminestudio.co.uk', IMG.t3],
  ['Yuki Tanaka', 'Sourcing & Materials', 'yuki@luminestudio.co.uk', IMG.t4],
] as const
const SOCIALS = ['Instagram', 'Pinterest', 'LinkedIn']
const PRESS = ['Architectural Digest', 'Wallpaper*', 'Dezeen', 'Elle Decor', 'The World of Interiors', 'Frame']
const TYPES = ['Residential', 'Commercial', 'Hospitality', 'Not sure yet']
const BUDGETS = ['Under £50k', '£50–150k', '£150–500k', '£500k+']
const ROWS: [string, string, string, string | readonly string[]][][] = [
  [['firstName', 'First name', 'text', 'Your first name'], ['lastName', 'Last name', 'text', 'Your last name']],
  [['email', 'Email address', 'email', 'you@email.com'], ['phone', 'Phone', 'tel', '+44']],
  [['type', 'Project type', 'select', TYPES], ['budget', 'Approximate budget', 'select', BUDGETS]],
  [['location', 'Project location', 'text', 'London, UK'], ['date', 'Preferred start', 'date', '']],
]
const REQUIRED = ['firstName', 'lastName', 'email', 'type', 'budget']
const INFO = [[Phone, 'Call us', '+44 20 7946 0201'], [Mail, 'Email us', 'hello@luminestudio.co.uk']] as const
const ADDR = [['London', '8 Boundary Street, Shoreditch, London E2 7JE'], ['Milan', 'Via Tortona 14, Milano, 20144']]
const FOOTER = [
  ['Work', ['Projects', 'Residential', 'Commercial', 'Hospitality', 'Archive']],
  ['Studio', ['About', 'Team', 'Process', 'Journal', 'Press']],
  ['Connect', ['Instagram', 'Pinterest', 'LinkedIn', 'hello@luminestudio.co.uk']],
] as const

/* ---------- motion helpers (props factories, not components) ---------- */
const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 32 }, whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 },
})
const sandLine = (center = false) => (
  <motion.div
    initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    style={{ transformOrigin: center ? 'center' : 'left center', width: 40, height: 1, background: 'hsl(var(--sand))', marginBottom: 16, ...(center && { margin: '0 auto 16px' }) }}
  />
)
const Img = ({ src, alt }: { src: string; alt: string }) =>
  src ? <img src={src} alt={alt} className="w-full h-full object-cover object-center" /> : null

const PX = 'px-6 md:px-10 lg:px-16'

/* ---------- navbar ---------- */
function Nav() {
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

/* ---------- hero ---------- */
function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, -120])
  const lines = [['Interiors', ''], ['that hold', ''], ['quiet power.', 'italic text-sand']]
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen pt-[68px]">
      <div className={`order-2 md:order-1 bg-bg flex flex-col justify-between gap-16 py-14 md:py-20 ${PX} md:bd-r`}>
        <div>
          <p className="mono text-mut mb-8" style={{ letterSpacing: '0.18em' }}>Interior Design Studio · London & Milan</p>
          <h1 className="serif text-fg" style={{ fontSize: 'clamp(56px, 6.5vw, 96px)', lineHeight: 0.95, letterSpacing: '-0.01em' }}>
            {lines.map(([t, cls], i) => (
              <span key={t} className="block overflow-hidden pb-[0.08em]">
                <motion.span className={`block ${cls}`} initial={{ y: '110%' }} animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: i * 0.14 }}>{t}</motion.span>
              </span>
            ))}
          </h1>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.55 }}>
          <p className="text-mut text-[14px] leading-[1.85] max-w-[380px] mb-10">
            We create residential and commercial spaces that are refined without being cold, and liveable without compromise.
          </p>
          <div className="flex gap-[10px] flex-wrap">
            <a href="#projects" className="beam text-[12px] font-medium tracking-[0.04em] px-7 py-[13px] rounded-[1px]">Our projects</a>
            <a href="#contact" className="beam text-[12px] font-medium tracking-[0.04em] px-7 py-[13px] rounded-[1px]">Get in touch</a>
          </div>
        </motion.div>
      </div>
      <div className="order-1 md:order-2 relative overflow-hidden aspect-[4/3] md:aspect-auto bg-raised">
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <Img src={IMG.hero} alt="Dimly lit living room with moody lighting by Lumine Studio" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(16,15,13,0.2) 0%, rgba(16,15,13,0.35) 60%, rgba(16,15,13,0.85) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end">
          <div>
            <p className="mono text-mut">Featured project</p>
            <p className="serif italic text-fg text-[18px] mt-2">The Chelsea House, 2025</p>
          </div>
          <a href="#projects" className="text-mut hover-sand text-[11px] uppercase tracking-[0.08em] pb-px transition-colors" style={{ borderBottom: '1px solid hsl(var(--border))' }}>View case →</a>
        </div>
      </div>
    </section>
  )
}

/* ---------- projects (cursor follower needs hooks) ---------- */
function Projects() {
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

/* ---------- app ---------- */
export default function App() {
  const [faq, setFaq] = useState<number | null>(1)
  const [step, setStep] = useState(0)
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
  const [paused, setPaused] = useState(false)
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
    <div className="bg-bg text-fg antialiased">
      <Nav />
      <Hero />

      {/* credentials */}
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

      {/* philosophy */}
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

      <Projects />

      {/* process */}
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

      {/* testimonials */}
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

      {/* studio */}
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

      {/* press 
      <section className={`bg-raised bd-t py-10 ${PX} flex flex-col md:flex-row md:items-center gap-6 md:gap-12`}>
        <span className="mono text-mut shrink-0" style={{ letterSpacing: '0.14em' }}>As seen in</span>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-4 text-mut">
          {PRESS.map((p) => (
            <span key={p} className="font-bold text-[16px] tracking-[-0.02em] opacity-40 hover:opacity-100 transition-opacity cursor-default">{p}</span>
          ))}
        </div>
      </section>*/}

      {/* faqs */}
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

      {/* contact */}
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

      {/* footer */}
      <footer className={`bg-deep pt-14 pb-8 ${PX}`}>
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="serif italic text-fg text-[19px]">Lumine Studio</div>
            <p className="text-mut text-[12px] leading-[1.7] mt-[10px] max-w-[200px]">Interior design and architecture. London · Milan · Paris.</p>
            <p className="mono text-sub mt-5" style={{ letterSpacing: 0 }}>© 2026 Lumine Studio Ltd. All rights reserved.</p>
          </div>
          {FOOTER.map(([h, links]) => (
            <div key={h}>
              <div className="mono text-sub mb-4" style={{ letterSpacing: '0.12em' }}>{h}</div>
              <ul className="flex flex-col gap-[10px]">
                {links.map((l) => <li key={l}><a href="#" className="text-mut hover-fg text-[12px] transition-colors">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-5 flex justify-between mono text-sub" style={{ borderTop: '1px solid rgba(242,237,228,0.06)', letterSpacing: 0 }}>
          <span>Privacy Policy · Terms</span><span>Designed by Lumine Studio</span>
        </div>
      </footer>
    </div>
  )
}

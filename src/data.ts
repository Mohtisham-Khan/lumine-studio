import { Layers, Building2, Armchair, Gem, Eye, KeyRound, MapPin, Shield, Clock, Phone, Mail } from 'lucide-react'
import { IMG } from './images'

export const NAV = ['Projects', 'Services', 'Studio', 'Journal', 'Contact']
export const CREDS = [
  ['140+', 'Projects completed'], ['12', 'Years of practice'], ['9', 'Countries'],
  ['4.9★', 'Client satisfaction'], ['London · Milan · Paris', 'Studio locations'],
]
export const BENEFITS = [
  [Layers, 'Full-service design', 'From initial concept through to final styling and handover. We handle architecture, interiors, furniture, and art.'],
  [Building2, 'Architecture & structure', 'We work from the shell inward — planning permissions, structural changes, materials, finishes, and built-in joinery.'],
  [Armchair, 'Custom furniture & sourcing', "Bespoke pieces made to our design, and curated works from the makers and galleries we've spent years building relationships with."],
  [Gem, 'Materials that age beautifully', 'Oak, stone, brass and linen chosen with restraint — finishes that gain character with time rather than lose it.'],
  [Eye, 'Fewer projects, fuller attention', 'We take on fewer projects than most, and Isabelle works on every one of them from first conversation to final styling.'],
  [KeyRound, 'Handed over, not handed off', "We manage procurement, contractors, and installation. You hand over the key and pick it up when it's finished."],
] as const
export const TAGS = ['Full-service design', 'Architecture', 'Joinery', 'Furniture & art', 'Hospitality']
// Add image URLs in `img` (briefs kept as comments for reference)
export const PROJECTS = [
  { name: 'The Chelsea House', tag: 'London · Residential', img: IMG.pr1, desc: 'A quiet townhouse of cream walls, oak joinery and afternoon light.' }, // minimalist apartment, cream walls, oak joinery, pivot door
  { name: 'Palazzo Bianco', tag: 'Milan · Residential', img: IMG.pr2, desc: 'Candlelit dining beneath a low pendant, in marble and bouclé.' },     // dark dining room, round marble table, bouclé chairs
  { name: 'Rue du Temple', tag: 'Paris · Residential', img: IMG.pr3, desc: 'A serene bedroom of linen, pale oak and soft marble.' },      // bedroom, linen curtains, pale oak headboard wall
  { name: 'The Carlow Kitchen', tag: 'Dublin · Residential', img: IMG.pr4, desc: 'Dark stone, brass fittings and warm task lighting.' },// dark stone island, brass fittings
  { name: 'Hotel Solaire', tag: 'Lisbon · Hospitality', img: IMG.pr5, desc: 'A dramatic lobby of dark stone and tall tropical green.' },     // hotel lobby, dark stone floors, tall plant
  { name: 'The Dover Gallery', tag: 'London · Commercial', img: IMG.pr6, desc: 'Paneled walls, an antique desk and a library made to be lived in.' },  // dark paneled study, antique desk, library shelving
]
export const SPAN = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7', 'lg:col-span-7', 'lg:col-span-5']
export const STEPS = [
  ['Discovery', 'We meet in person or remotely to understand how you use your space, what you love, and what isn\'t working. No briefs — just conversation.'],
  ['Concept', 'We develop two to three spatial concepts: mood boards, material palettes, and rough floor plans. You choose a direction and we refine.'],
  ['Design', 'Detailed drawings, material specifications, furniture selections, and bespoke joinery briefs. Everything documented before anything is ordered.'],
  ['Delivery', 'We manage procurement, contractors, and installation. You hand over the key and pick it up when it\'s finished.'],
]
export const STEP_IMG = [IMG.p1, IMG.studio, IMG.p6, IMG.p5]
export const TESTIMONIALS = [
  ['Helena M.', 'London', 'We handed Lumine a shell of an apartment and got back a home we didn\'t know we were capable of living in. Every decision they made was right.'],
  ['Francesco & Giulia T.', 'Milan', 'Three studios pitched us. Lumine was the only one that listened before they talked. The result is something we couldn\'t have imagined ourselves.'],
  ['James K.', 'Dublin', 'I\'ve renovated twice before, both times with other designers. This was the first project that finished on time, on budget, and exactly as specified. I was genuinely shocked.'],
]
export const FEATURED = { q: 'Isabelle listened for an hour before she drew a single line. The house feels like it was always ours.', by: 'Sofia R., Rue du Temple, Paris — 2025' }
export const REVIEW_STATS = [[MapPin, '140+ projects delivered across 9 countries'], [Shield, 'On time, on budget, exactly as specified'], [Clock, '12+ years of considered practice']] as const
export const FAQS = [
  ['How long does a typical project take?', 'Single-room transformations usually take three to four months; full residences run eight to twelve from first concept to handover. Everything is documented before anything is ordered, so timelines stay honest.', IMG.p1],
  ['How does custom furniture and joinery work?', 'Each piece is drawn for the room it lives in — built-in oak joinery, bespoke seating, shelving and beds — then made by the workshops we have worked with for years.', IMG.p6],
  ['What materials do you specify?', 'Materials that age beautifully: oak, stone, marble, brass, lime plaster and linen. We favour honest finishes that gain character rather than lose it.', IMG.p4],
  ['Do you work outside London and Milan?', 'Yes. We have completed projects in nine countries and travel for site visits, with remote design reviews in between. We take on fewer projects than most so each gets our full attention.', IMG.p5],
  ['How are fees structured?', 'A fixed design fee agreed after our first conversation, with procurement and project management scoped separately. You always know the cost of a decision before you make it.', IMG.p3],
] as const
export const TEAM = [
  ['Isabelle Fontaine', 'Creative Director', 'isabelle@luminestudio.co.uk', IMG.t1],
  ['Marco Riva', 'Senior Designer', 'marco@luminestudio.co.uk', IMG.t2],
  ['Clara Hennessy', 'Project Manager', 'clara@luminestudio.co.uk', IMG.t3],
  ['Yuki Tanaka', 'Sourcing & Materials', 'yuki@luminestudio.co.uk', IMG.t4],
] as const
export const SOCIALS = ['Instagram', 'Pinterest', 'LinkedIn']
export const PRESS = ['Architectural Digest', 'Wallpaper*', 'Dezeen', 'Elle Decor', 'The World of Interiors', 'Frame']
export const TYPES = ['Residential', 'Commercial', 'Hospitality', 'Not sure yet']
export const BUDGETS = ['Under £50k', '£50–150k', '£150–500k', '£500k+']
export const ROWS: [string, string, string, string | readonly string[]][][] = [
  [['firstName', 'First name', 'text', 'Your first name'], ['lastName', 'Last name', 'text', 'Your last name']],
  [['email', 'Email address', 'email', 'you@email.com'], ['phone', 'Phone', 'tel', '+44']],
  [['type', 'Project type', 'select', TYPES], ['budget', 'Approximate budget', 'select', BUDGETS]],
  [['location', 'Project location', 'text', 'London, UK'], ['date', 'Preferred start', 'date', '']],
]
export const REQUIRED = ['firstName', 'lastName', 'email', 'type', 'budget']
export const INFO = [[Phone, 'Call us', '+44 20 7946 0201'], [Mail, 'Email us', 'hello@luminestudio.co.uk']] as const
export const ADDR = [['London', '8 Boundary Street, Shoreditch, London E2 7JE'], ['Milan', 'Via Tortona 14, Milano, 20144']]
export const FOOTER = [
  ['Work', ['Projects', 'Residential', 'Commercial', 'Hospitality', 'Archive']],
  ['Studio', ['About', 'Team', 'Process', 'Journal', 'Press']],
  ['Connect', ['Instagram', 'Pinterest', 'LinkedIn', 'hello@luminestudio.co.uk']],
] as const
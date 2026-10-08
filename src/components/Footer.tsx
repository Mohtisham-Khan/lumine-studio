import { FOOTER } from '../data'
import { PX } from '../lib/constants'

export default function Footer() {
  return (
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
  )
}
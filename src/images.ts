// hero, t1–t4 (team), quote (testimonials), workspace (contact), and pr1–pr6 (projects) are local photos in public/images/; the rest are illustrated placeholders (inline SVG data URIs). Swap any entry with a real photo path or URL.
const wrap = (b: string, glow = '#c4a882') =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800"><defs><radialGradient id="g"><stop offset="0" stop-color="${glow}" stop-opacity=".55"/><stop offset="1" stop-color="${glow}" stop-opacity="0"/></radialGradient><linearGradient id="v" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".45"/><stop offset=".5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></linearGradient></defs>${b}<rect width="600" height="800" fill="url(#v)"/></svg>`
  )}`

const pendant = (x: number, y: number, r = 20, glow = 240) =>
  `<path d="M${x} 0V${y}" stroke="#5e5a54"/><circle cx="${x}" cy="${y + glow / 2}" r="${glow}" fill="url(#g)"/><circle cx="${x}" cy="${y}" r="${r}" fill="#f0ebe2"/>`

export const IMG = {
  t1: '/images/team-isabelle.jpg',
  t2: '/images/team-marco.jpg',
  t3: '/images/team-clara.jpg',
  t4: '/images/team-yuki.jpg',
  // featured testimonial: dim-lit table and chairs in a dark room
  quote: '/images/testimonial-dining.jpg',
  // contact background: moody table and chairs in a dark room
  workspace: '/images/studio-workspace.jpg',
  // projects: real room photos
  pr1: '/images/project-chelsea.jpg',
  pr2: '/images/project-palazzo.jpg',
  pr3: '/images/project-ruedu.jpg',
  pr4: '/images/project-carlow.jpg',
  pr5: '/images/project-solaire.jpg',
  pr6: '/images/project-dover.jpg',
  // hero: dim-lit moody living room
  hero: '/images/hero-living.jpg',
  // minimalist apartment: cream walls, oak joinery, pivot door, afternoon light
  p1: wrap(`<rect width="600" height="800" fill="#d9cfbe"/><rect y="580" width="600" height="220" fill="#b8a283"/>
    <polygon points="330,0 600,0 600,470 330,700" fill="#f3e9d2" opacity=".55"/>
    <rect x="70" y="120" width="190" height="460" fill="#a98a5e"/><rect x="82" y="132" width="166" height="436" fill="#b99a6c"/><circle cx="228" cy="350" r="6" fill="#5b4527"/>
    <rect x="330" y="300" width="200" height="14" fill="#a98a5e"/><rect x="340" y="314" width="8" height="120" fill="#a98a5e"/><rect x="512" y="314" width="8" height="120" fill="#a98a5e"/>
    <rect x="360" y="260" width="30" height="40" fill="#8a8478"/><ellipse cx="300" cy="650" rx="200" ry="26" fill="#a38a66" opacity=".5"/>`, '#ffffff'),
  // dark dining room: round marble table, boucle chairs, low pendant, candles
  p2: wrap(`<rect width="600" height="800" fill="#17140f"/><rect y="580" width="600" height="220" fill="#0f0d0a"/>${pendant(300, 250, 26, 300)}
    <ellipse cx="300" cy="500" rx="190" ry="34" fill="#d9d3c7"/><rect x="288" y="500" width="24" height="110" fill="#6e6a62"/><ellipse cx="300" cy="610" rx="70" ry="12" fill="#2a2825"/>
    <circle cx="110" cy="520" r="52" fill="#e5dccb"/><circle cx="490" cy="520" r="52" fill="#e5dccb"/><circle cx="300" cy="420" r="50" fill="#d6ccb9"/>
    <rect x="240" y="470" width="6" height="22" fill="#f0ebe2"/><rect x="352" y="470" width="6" height="22" fill="#f0ebe2"/><circle cx="243" cy="462" r="14" fill="url(#g)"/><circle cx="355" cy="462" r="14" fill="url(#g)"/>`),
  // bedroom: floor-to-ceiling linen curtains, pale oak headboard wall, marble lamp
  p3: wrap(`<rect width="600" height="800" fill="#cfc4b0"/><rect x="0" y="0" width="190" height="800" fill="#e6dccb"/>${[0, 38, 76, 114, 152].map((x) => `<rect x="${x}" y="0" width="22" height="800" fill="#d8cdb9"/>`).join('')}
    <rect x="230" y="120" width="330" height="360" fill="#b99a6c"/>${[250, 300, 350, 400, 450, 500].map((x) => `<rect x="${x}" y="120" width="3" height="360" fill="#a98a5e"/>`).join('')}
    <rect y="620" width="600" height="180" fill="#a89478"/><rect x="215" y="430" width="360" height="170" rx="10" fill="#efe8da"/><rect x="215" y="400" width="360" height="60" rx="14" fill="#fbf6ea"/>
    <rect x="590" y="500" width="0" height="0"/><rect x="170" y="470" width="40" height="150" fill="#8a8478"/><rect x="176" y="430" width="28" height="42" rx="4" fill="#f0ebe2"/><circle cx="190" cy="450" r="60" fill="url(#g)"/>`, '#ffe6b8'),
  // open-plan kitchen: dark stone island, brass fittings, warm task lighting
  p4: wrap(`<rect width="600" height="800" fill="#1b1916"/><rect y="600" width="600" height="200" fill="#12100e"/>
    <rect x="30" y="140" width="540" height="320" fill="#23201c"/>${[30, 120, 210, 300, 390, 480].map((x) => `<rect x="${x + 6}" y="150" width="78" height="300" fill="none" stroke="#3a3631"/><rect x="${x + 40}" y="300" width="10" height="3" fill="#c4a882"/>`).join('')}
    ${[170, 300, 430].map((x) => pendant(x, 230, 16, 150).replace(/<path[^>]*>/, `<path d="M${x} 0V230" stroke="#c4a882"/>`)).join('')}
    <rect x="60" y="460" width="480" height="150" fill="#2e2b27"/><rect x="50" y="450" width="500" height="20" fill="#44403a"/><rect x="290" y="380" width="4" height="70" fill="#c4a882"/><path d="M292 380q30 -20 50 10" stroke="#c4a882" stroke-width="5" fill="none"/>`),
  // hotel lobby: dark stone floor, statement reception, tall tropical plant
  p5: wrap(`<rect width="600" height="800" fill="#161411"/><rect y="560" width="600" height="240" fill="#0f0d0b"/>${[0, 100, 200, 300, 400, 500].map((x) => `<path d="M${x} 560L${x - 40 + 40} 800" stroke="#26231f"/>`).join('')}
    <rect x="150" y="80" width="300" height="380" fill="none" stroke="#2a2825"/>${pendant(300, 120, 14, 200)}
    <rect x="150" y="470" width="300" height="120" fill="#34312d"/><rect x="140" y="460" width="320" height="16" fill="#8a8478"/><rect x="150" y="470" width="300" height="3" fill="#c4a882"/>
    <rect x="522" y="470" width="30" height="120" fill="#2a2825"/>${[-70, -35, 0, 35, 70].map((a) => `<ellipse cx="537" cy="330" rx="14" ry="110" fill="#26402f" transform="rotate(${a} 537 450)"/>`).join('')}`),
  // study: dark paneled walls, library shelving, antique desk, leather chair
  p6: wrap(`<rect width="600" height="800" fill="#1e1a15"/>${[0, 100, 200, 300, 400, 500].map((x) => `<rect x="${x + 8}" y="40" width="84" height="480" fill="none" stroke="#2f2a23"/>`).join('')}
    <rect x="40" y="60" width="220" height="400" fill="#16130f"/>${[110, 170, 230, 290, 350, 410].map((y) => `<rect x="40" y="${y}" width="220" height="4" fill="#3a3329"/>${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<rect x="${52 + i * 26}" y="${y - 42 + (i % 3) * 5}" width="${16 + (i % 2) * 5}" height="${42 - (i % 3) * 5}" fill="${['#5b3a2b', '#7a5a3a', '#3a4a3a', '#8a6a45'][i % 4]}"/>`).join('')}`).join('')}
    <rect y="600" width="600" height="200" fill="#2a1f17"/><rect x="290" y="440" width="270" height="18" fill="#6b4a2c"/><rect x="305" y="458" width="14" height="150" fill="#5a3d24"/><rect x="530" y="458" width="14" height="150" fill="#5a3d24"/>
    <rect x="400" y="380" width="70" height="58" fill="#e6dccb"/><circle cx="350" cy="400" r="70" fill="url(#g)"/><rect x="340" y="380" width="26" height="60" fill="#8a6a45"/>
    <rect x="320" y="500" width="150" height="110" rx="30" fill="#6b3d22"/>`),
  // studio workspace: drawing table, sketches, fanned material samples
  studio: wrap(`<rect width="600" height="800" fill="#2a241c"/><rect x="0" y="360" width="600" height="440" fill="#4a3a28"/><rect x="0" y="360" width="600" height="6" fill="#6b563a"/>
    <rect x="70" y="420" width="300" height="220" fill="#efe8da" transform="rotate(-6 220 530)"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${100 + i * 40} 450h${30}M${100 + i * 40} 470h${80}" stroke="#8a8478" transform="rotate(-6 220 530)"/>`).join('')}
    ${['#c4a882', '#8a8478', '#5e4a38', '#d9d3c7', '#26402f', '#7a3d2e'].map((c, i) => `<rect x="360" y="440" width="48" height="190" rx="3" fill="${c}" transform="rotate(${-40 + i * 16} 384 640)"/>`).join('')}
    <path d="M520 360L470 120" stroke="#c4a882" stroke-width="6"/><path d="M470 120l-60 20" stroke="#c4a882" stroke-width="6"/><circle cx="410" cy="170" r="120" fill="url(#g)"/><circle cx="410" cy="140" r="14" fill="#f0ebe2"/>`, '#ffd9a0'),
}

# Lumine Studio

Interior design studio website — React + Vite + TypeScript + Tailwind CSS 3 + Motion (`motion/react`) + lucide-react.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
```

## Structure
- `src/App.tsx` — pure composition of section components
- `src/data.ts` — all content & data constants (nav, projects, testimonials, FAQs, team, contact form config…)
- `src/images.ts` — central `IMG` map photo references. Most images are real photos in `public/images/`; a few (marked as `wrap(...)` SVG) are still illustrated placeholders
- `src/lib/` — shared helpers: `motion.tsx` (reveal / sandLine), `Img.tsx`, `constants.ts`
- `src/components/` — one component per section: `Nav`, `Hero`, `Credentials`, `Philosophy`, `Projects`, `Process`, `Testimonials`, `Studio`, `Faqs`, `Contact`, `Footer`
- `src/index.css` — design tokens, fonts, `.beam` rotating-border button, helper classes

## Replace before launch
Sample copy: testimonials, FAQs, team emails, project descriptions, contact details.
The enquiry form validates client-side only — wire `submit` in `src/components/Contact.tsx` to your backend/email service.
# Lumine Studio

Interior design studio website — React + Vite + TypeScript + Tailwind CSS 3 + Motion (`motion/react`) + lucide-react.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
```

## Structure
- `src/App.tsx` — all 11 sections, data-driven (array constants at the top of the file)
- `src/images.ts` — illustrated placeholder images (inline SVG). Replace any `IMG.*` entry with a real photo URL
- `src/index.css` — design tokens, fonts, `.beam` rotating-border button, helper classes

## Replace before launch
Sample copy: testimonials, FAQs, team emails, project descriptions, contact details.
The enquiry form validates client-side only — wire `submit` in `App.tsx` to your backend/email service.

# Tech Forum Landing Page

Modern, premium landing page for a technology forum built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Animated hero with dynamic gradient, particles, parallax layers.
- Sticky glassmorphic navbar with active section highlight & smooth scroll.
- Program (schedule) grid with animated reveal.
- Projects gallery with hover zoom + layered gradients.
- About section with staggered typography.
- Interactive QR code (click to copy link).
- Loading screen with animated shape.
- Parallax & subtle motion patterns.
- Accessible semantics, focus styles, reduced motion friendly (respects OS setting via browser default for motion).
- Fully responsive (mobile-first, fluid grid + utility classes).

## Quick Start

```powershell
# Install dependencies
npm install

# Start dev server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

Open http://localhost:5173 after running dev.

## Customization Guide

- Colors: edit `tailwind.config.js` (primary/accent/neon) & gradient utilities in `src/index.css`.
- Schedule: update `sessions` array in `src/components/Program.tsx`.
- Projects: update `projects` array in `src/components/Projects.tsx` or fetch via API.
- About: edit `paragraphs` array in `src/components/About.tsx`.
- QR Code: replace placeholder image URL in `Hero.tsx` with your generated QR code.

## Accessibility

- Focus-visible outlines for keyboard users.
- Uses semantic landmarks: nav, main, section, footer.
- Animated elements avoid essential content reliance.

## Performance Notes

- Vite + ESBuild fast dev.
- Images are placeholder remote. Replace with optimized assets (next-gen formats, sized).
- Consider adding `<link rel="preconnect" href="https://picsum.photos" />` if keeping placeholders.

## Future Enhancements (Optional)

- Add dark/light theme toggle.
- Add multi-track schedule filtering.
- Integrate CMS / data API.
- Implement accessible mobile nav drawer.
- Add service worker for offline caching.

## License

Replace with your chosen license (MIT recommended for open distribution).

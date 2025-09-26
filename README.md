#Project name#

ACPL CyberCare Landing Page

Tech stack used
- React with functional components and hooks
- CSS Modules + global utility classes for buttons, badges, cards
- Responsive layout with desktop-first CSS and breakpoints at 768px and 480px
- Asset pipeline via Vite/CRA (whichever the repo uses), SVG icons, and gradient/themed styling
- Optional: Bootstrap popover styling variables for map pins

Features implemented
- Hero with background image and overlay
- Trust badges, stats grid, and CTA buttons
- Why section with interactive stat cards and dynamic detail panel
- Services grid with hover states and consistent card UI
- Delivery steps with smooth, GPU-friendly animations
- Trust section with ANZ map pins and copy
- Partners strip with infinite marquee and KPI cards
- Case studies with selectable cards and detail band
- Newsletter subscribe UI with pill form
- Contact panel and form with accessible inputs
- Global tokens, button variants, badge lines, and progress utility

How to run the project locally
- Prerequisites: Node 18+ and npm/pnpm/yarn installed.
- Clone: git clone https://github.com/kumarvikas10/acpl-landing-page && cd acpl-landing-page
- Install: npm install

Start dev server:
- npm start (defaults to http://localhost:3000)

Build for production:
- npm run build (outputs to build), then serve -s build to test locally

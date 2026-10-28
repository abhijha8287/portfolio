# Portfolio

Source for my personal site: https://abhijha8287.github.io/portfolio

## Why this exists
One page that shows who I am, my experience, selected projects, skills and how to reach me, with a downloadable resume.

## What it does
- Single static page: hero with key stats, experience, case studies, project grid, skills and education, contact
- Follows the visitor's light or dark system setting; no theme toggle
- Ships no client-side JavaScript of its own; the page is fully pre-rendered
- Links that leave the page open in a new tab
- Deploys to GitHub Pages on every push to `master`

## Project structure
```
portfolio/
├── app/
│   ├── page.tsx       All page sections
│   ├── layout.tsx     Fonts and metadata
│   └── globals.css    Colour tokens and base styles
├── lib/
│   ├── data/          Profile, experience, projects, skills, education
│   └── base-path.ts   GitHub Pages path helper
├── public/            Resume PDF and images
├── .github/workflows/ Build and deploy to GitHub Pages
└── next.config.ts     Static export settings
```
To change content, edit the files in `lib/data/`; `site.ts` holds the hero, stats, case studies and project cards.

## Getting started
Requirements: Node.js 20+.
```bash
git clone https://github.com/abhijha8287/portfolio.git
cd portfolio
npm install
npm run dev                                        # http://localhost:3000
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build     # static site in out/
```

## Tech stack
Next.js 16 (static export), React 19, TypeScript, Tailwind CSS 4, GitHub Pages, GitHub Actions

# Mercy Babayemi — Portfolio
> React + Vite · CSS Modules · Dark/Light theme · Fully component-driven

---

## Why React (not HTML)

The previous HTML file was 600+ lines of repeated markup. Every card, badge, and
section was copy-pasted. With this React setup:

- **Edit data, not markup** — all your content lives in `src/data/portfolio.js`
- **One component, everywhere** — `<SectionHeader />`, `<ProjectCard />` are reused across all sections
- **Add a project in 5 seconds** — just push an object into the `PROJECTS.grid` array
- **Theme state is managed cleanly** — `ThemeContext` in `App.jsx`, persisted to `localStorage`
- **Deployable to Vercel in one command** — `vercel --prod`

---

## Project Structure

```
mercy-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── mercy.jpg           ← your photo (already placed)
│   ├── components/
│   │   ├── Nav.jsx             ← sticky nav + theme toggle + mobile menu
│   │   ├── Nav.module.css
│   │   ├── SectionHeader.jsx   ← shared chip + title + bar
│   │   ├── SectionHeader.module.css
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── data/
│   │   └── portfolio.js        ← ⭐ ALL YOUR CONTENT LIVES HERE
│   ├── hooks/
│   │   └── useReveal.js        ← scroll-triggered fade-in animations
│   ├── sections/
│   │   ├── Hero.jsx + .module.css
│   │   ├── About.jsx + .module.css
│   │   ├── Skills.jsx + .module.css
│   │   ├── Projects.jsx + .module.css
│   │   ├── Research.jsx + .module.css
│   │   ├── TechWriting.jsx + .module.css   ← tabs: styles / live Medium / upcoming
│   │   ├── Experience.jsx + .module.css    ← tabs: paid / volunteering
│   │   ├── Leadership.jsx + .module.css    ← Rotaract conference tracker
│   │   ├── Services.jsx + .module.css
│   │   ├── Initiative.jsx + .module.css    ← ForNaijaKid
│   │   ├── Fashion.jsx + .module.css       ← Aafinoge
│   │   └── Contact.jsx + .module.css
│   ├── styles/
│   │   └── global.css          ← CSS variables (themes), resets, shared utilities
│   ├── App.jsx                 ← ThemeContext + section order
│   └── main.jsx                ← ReactDOM.render entry point
├── index.html
├── vite.config.js
├── vercel.json
├── .gitignore
└── package.json
```

---

## Setup Commands

Run these exactly, in order, from your terminal:

```bash
# 1. Navigate to where you want the project
cd ~/projects   # or wherever you keep your work

# 2. Clone or copy the folder, then enter it
cd mercy-portfolio

# 3. Install dependencies
npm install

# 4. Start dev server (opens at http://localhost:5173)
npm run dev
```

That's it. Hot reload is on — save any file and the browser updates instantly.

---

## Build & Deploy

```bash
# Build for production (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview

# Deploy to Vercel (first time)
npm install -g vercel
vercel

# Deploy to Vercel (subsequent pushes)
vercel --prod
```

For Vercel auto-deploy from GitHub:
1. Push this folder to a GitHub repo
2. Go to vercel.com → Import Project → select the repo
3. Framework: **Vite** (auto-detected)
4. Click Deploy — done.

---

## Customising Content

**Everything you need to edit is in one file: `src/data/portfolio.js`**

### Update Aafinoge links (do this first)
```js
// src/data/portfolio.js — FASHION object
export const FASHION = {
  brand: 'Aafinoge',
  links: [
    { label: 'Website',    icon: '🌐', href: 'https://aafinoge.com' },     // ← your real URL
    { label: 'Instagram',  icon: '📸', href: 'https://instagram.com/aafinoge' }, // ← real handle
    { label: 'TikTok',     icon: '🎵', href: 'https://tiktok.com/@aafinoge' },
    { label: 'Twitter / X',icon: '🐦', href: 'https://x.com/aafinoge' },
  ],
}
```

### Add a new project
```js
// src/data/portfolio.js — PROJECTS.grid array
{
  badge: 'Web Dev',
  title: 'Client Website Name',
  desc: 'What it does and how you built it.',
  stack: ['React', 'Paystack', 'n8n'],
  links: [{ label: 'Live Site →', href: 'https://clientsite.com' }],
},
```

### Add a Rotaract event (after it happens)
```js
// src/data/portfolio.js — LEADERSHIP.conferences array
{ name: 'Porto Novo International Trip', date: 'June 2026', status: 'done', youtube: 'https://youtube.com/watch?v=YOUR_ID' },
```
Change `status` from `'upcoming'` → `'done'`, and add the YouTube link.

### Update Medium articles
The **Live on Medium** tab in the Writing section fetches live from the RSS feed automatically.
No action needed — it always shows your latest 3 articles.

If you want to update the static writing style cards:
```js
// src/data/portfolio.js — TECH_WRITING.styles array
{
  type: 'User Manual',
  icon: '📋',
  title: 'Your Manual Title',
  desc: 'What the piece demonstrates about your writing style.',
  medium: 'https://medium.com/@mercybabayemi/your-post',
},
```

### Swap your photo
```bash
# Replace the file — keep the same name
cp /path/to/new-photo.jpg src/assets/mercy.jpg
```

---

## Theme System

Themes live entirely in CSS variables in `src/styles/global.css`.
The toggle in the Nav calls `toggleTheme()` from `ThemeContext` in `App.jsx`.
The preference is saved to `localStorage` so it persists across sessions.

To change accent colours, edit these two blocks in `global.css`:
```css
:root, [data-theme="dark"] {
  --teal: #00D4B4;   /* primary accent */
  --gold: #E8A020;   /* secondary accent */
  --purple: #8B7CF8; /* research / writing accent */
}

[data-theme="light"] {
  --teal: #007A6B;
  --gold: #A06800;
  --purple: #5C52C5;
}
```

---

## Adding a New Section

1. Create `src/sections/MySection.jsx` and `src/sections/MySection.module.css`
2. Add your data to `src/data/portfolio.js`
3. Import and drop it into `src/App.jsx` at the position you want:
```jsx
import MySection from './sections/MySection'
// ...
<Leadership />
<MySection />   {/* ← here */}
<Services />
```
4. Add it to the nav links array in `src/components/Nav.jsx`:
```js
{ label: 'MySection', href: '#mysection' }
```

---

## Scroll Animations

Every section uses `useReveal` from `src/hooks/useReveal.js`.

- `useReveal()` — attach `ref` to a single element, adds `.visible` class when it enters viewport
- `useRevealChildren()` — attach `ref` to a grid container, stagger-animates all `.reveal-child` elements

The CSS in `global.css`:
```css
.reveal { opacity: 0; transform: translateY(28px); transition: 0.6s ease; }
.reveal.visible { opacity: 1; transform: none; }
```

---

## Research Platform Links (placeholders to update)

In `src/data/portfolio.js` → `RESEARCH.links`, replace the placeholder hrefs when your paper is published:

| Platform | Where to get URL |
|---|---|
| Google Scholar | scholar.google.com → your profile → copy paper link |
| arXiv | arxiv.org → submit → copy e.g. `https://arxiv.org/abs/2506.XXXXX` |
| HuggingFace Space | huggingface.co/spaces/mercybabayemi/afriped |
| ResearchGate | researchgate.net → upload paper → copy profile link |
| Semantic Scholar | auto-indexed from arXiv, copy URL after indexing |

---

## Live Medium RSS Feed

The **Live on Medium** tab in the Writing section hits this URL at runtime:
```
https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mercybabayemi
```

Free tier, no API key needed. Returns your latest 3 posts with title, thumbnail, and excerpt.
If it fails (network, CORS), the component silently falls back to a direct Medium link — no broken UI.

---

## File Count Summary

| Type | Count |
|---|---|
| JSX components | 15 |
| CSS Modules | 14 |
| Data file | 1 |
| Hooks | 1 |
| Config files | 3 |
| **Total** | **34 files** |

---

## Sections in Order

| # | Section | ID | Note |
|---|---|---|---|
| 1 | Hero | `#home` | Photo, stats, CTAs |
| 2 | About | `#about` | Bio + cards |
| 3 | Skills | `#skills` | 8 skill cards |
| 4 | Projects | `#projects` | Featured + 6 grid |
| 5 | Research | `#research` | AfriPed + platform links |
| 6 | Technical Writing | `#writing` | 3 tabs: styles / live / upcoming |
| 7 | Experience | `#experience` | 2 tabs: paid / volunteering |
| 8 | Leadership | `#leadership` | Rotaract + conference tracker |
| 9 | Services | `#services` | 5 service cards |
| 10 | Initiative | `#initiative` | ForNaijaKid |
| 11 | Fashion | `#fashion` | Aafinoge |
| 12 | Contact | `#contact` | Form + socials |
# mercy-portfolio-v2

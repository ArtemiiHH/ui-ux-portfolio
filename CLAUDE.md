# Prompt: Build a Designer Portfolio Website

Build a one-page personal portfolio website for a web/product designer. Use **React (functional components + hooks)** and **CSS Modules** (one `.module.css` file per component, no CSS-in-JS, no Tailwind).

## Fonts
- Load **"Clash Grotesk"** (weight 600–700) via `@font-face` or a CDN, and use it **only** for the hero `<h1>` title.
- Load **"Poppins"** (weights 400, 500, 600, 700) from Google Fonts and use it for every other piece of text: nav, section headings, body copy, tags, and buttons.
- Set both as CSS custom properties (`--font-display`, `--font-body`) in a global stylesheet so components reference them consistently.

## Visual style
- Soft, playful-but-professional aesthetic. Generous whitespace, large rounded corners (16–28px) on every card, image and button.
- Color palette (define as CSS variables):
  - `--bg-light: #ffffff`
  - `--bg-muted: #f2f2f2` (work section background, project cards)
  - `--text-dark: #141414`
  - `--accent-green: #7fa88e` (hero highlight word, buttons)
  - `--accent-green-dark: #4c6b58` (about-me card background)
  - `--accent-pink: #f3c6ba` (footer background)
  - `--accent-orange: #f2a94e` (secondary CTA button)
- Buttons are pill-shaped, small uppercase bold Poppins text, solid color fill, subtle hover lift/scale.
- Tags are tiny pill outlines/fills with uppercase micro text under each project title.

## Components & Sections

### 1. Navbar (`Navbar`)
- Sticky/transparent, centered nav group: `Home · Work · [circular avatar illustration] · About · Contact`.
- Poppins medium weight, black text, no background until scrolled (optional subtle blur on scroll).

### 2. Hero (`Hero`)
- Large centered/left-aligned two-line headline using **Clash Grotesk**, e.g.:
  - Line 1: "Hi I am {name},"
  - Line 2: "I design **{service}**" — the last word styled in `--accent-green`.
- No supporting paragraph needed; keep it minimal with tall vertical padding above and below.

### 3. Selected Work (`WorkSection` + `ProjectCard`)
- Section background `--bg-muted`.
- Centered heading "Selected Work" (Poppins bold, ~32px) plus a short 2-line description below it, muted gray text.
- Layout: one full-width featured `ProjectCard` first, followed by a responsive 2-column grid of `ProjectCard`s (collapse to 1 column on mobile).
- Each `ProjectCard`: rounded rectangle container, illustration/image centered and vertically breathing, bold project title bottom-left, row of small tag pills beneath the title. Add hover shadow/scale transition.
- Centered pill "View All" button (`--accent-green` fill, white text) below the grid.

### 4. About Me (`AboutSection`)
- Full-width rounded card, background `--accent-green-dark`, split into two columns (image left, text right; stack on mobile).
- Left column: portrait photo, rounded corners, optional playful overlay graphic and a small circular badge icon top-left.
- Right column: small uppercase eyebrow label, "About me" heading, two short paragraphs (white/cream text), pill CTA button "Book a Call" in `--accent-orange`.

### 5. Footer CTA (`FooterCTA`)
- Full-width section, background `--accent-pink`.
- Top-left circular avatar illustration.
- Large bold two-line heading, e.g. "Hey, thanks for stopping by." in white, Poppins bold/black weight.
- Short paragraph, pill "Book a Call" button (`--accent-green` fill).
- Bottom row: large circular outlined social icons (LinkedIn, YouTube, Instagram, Threads) using an icon library like `lucide-react` or inline SVGs, evenly spaced, white stroke on transparent circles.

## Behavior & responsiveness
- Smooth scroll between nav anchors.
- Fade/slide-up on-scroll entrance animation for project cards (IntersectionObserver or a lightweight hook).
- Mobile breakpoint (~768px): nav collapses appropriately, work grid becomes single column, hero title scales down, about-me and footer sections stack vertically.

## Deliverable
Generate the full component tree (`Navbar`, `Hero`, `WorkSection`, `ProjectCard`, `AboutSection`, `FooterCTA`) each with its own CSS Module, plus a root `App.jsx` that assembles them in order: Navbar → Hero → WorkSection → AboutSection → FooterCTA. Use placeholder text/images/icons where real assets aren't available, keeping the color, spacing, and typography rules above.

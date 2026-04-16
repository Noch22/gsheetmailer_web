# AGENTS.md

## Project purpose
- Build a temporary static marketing site for GSheetMailer.
- Current scope is intentionally small: one landing page and one Privacy Policy page.
- This repo should stay easy to replace later with a fuller Next.js app.

## Product context
- Product name: GSheetMailer
- Product type: Chrome extension for sending personalized emails from Google Sheets with Gmail
- Audience: non-technical users who want a simple, trustworthy workflow

## Non-goals
- No backend
- No blog
- No account system or payments here
- No unnecessary animations or heavy UI libraries
- No extra dependencies unless clearly justified

## Tech and workflow
- Framework: Astro
- Prefer plain HTML/CSS and small reusable Astro components
- Keep JavaScript minimal; static-first is preferred
- Dev: `npm install`, then `npm run dev`
- Validate changes with `npm run build`

## UX and copy guidance
- Tone should be simple, reassuring, product-oriented, and non-technical
- Style should feel like a clean light SaaS landing page
- Keep layouts mobile-friendly and uncluttered
- Use clear CTAs, especially for installing the Chrome extension and reading the Privacy Policy

## Content expectations
- Landing page should clearly explain what the extension does and how it works in 3 simple steps
- Privacy Policy should live on its own dedicated page
- External URLs should be easy to update from one obvious place when possible

## Deployment notes
- Keep the site compatible with GitHub Pages
- When changing config, prefer static-safe settings in `astro.config.mjs`
- Avoid assumptions that require server-side rendering or runtime secrets

## Repo pointers
- Main pages live under [src/pages](src/pages)
- Shared layout lives under [src/layouts/Layout.astro](src/layouts/Layout.astro)
- Starter docs are in [README.md](README.md) and can be simplified later if needed

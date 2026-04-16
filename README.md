# GSheetMailer marketing site

Temporary static marketing site for GSheetMailer, built with Astro.

## Project goals

- one lightweight landing page
- one Privacy Policy page
- simple HTML and CSS
- easy GitHub Pages deployment
- easy migration later to a more complete Next.js app

## Local development

1. Install dependencies:

   npm install

2. Start the local server:

   npm run dev

3. Build the production version:

   npm run build

4. Preview the built site locally:

   npm run preview

## Update product settings

Edit the shared product information in src/consts.ts.
This is the single place to update:

- product name
- support email
- domain
- Chrome extension URL

## GitHub Pages deployment

A workflow is included in .github/workflows/deploy.yml.

To deploy:

1. Push the repository to GitHub.
2. In GitHub, open Settings → Pages.
3. Set the source to GitHub Actions.
4. Push to the main branch to trigger deployment.

## Notes for custom domains or repo paths

- If you use a custom domain, keep SITE_URL set to your real domain.
- If you deploy under a repository subpath, update BASE_PATH in the workflow or your environment.

## Tech

- Astro
- static output
- no backend
- no extra UI dependencies


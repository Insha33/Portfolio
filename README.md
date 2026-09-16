# Insha Mustafa — Portfolio

A responsive portfolio for a business analyst transitioning into product management, built with HTML, CSS, JavaScript, and Vite.

## Run

```sh
npm install
npm run dev
```

`npm run build` generates `dist/`. `npm run preview` previews the production build. No backend or API keys are required.

Project content is in `src/main.js`; biography and experience are in `index.html`; design tokens are in `src/style.css`. The downloadable resume is `public/Insha_Mustafa_Resume.pdf`.

Features include an interactive product-thinking canvas, project filters, accessible project dialogs, resume download, and email contact/copy actions. Mobile layouts, reduced-motion preferences, and keyboard navigation are supported.

The supplied resume is the source for experience and outcomes. Project illustrations are conceptual, not internal product screenshots. Independent prototypes remain labeled as such, and estimated outcomes retain that qualifier.

## Design references

- [Figma portfolio examples](https://www.figma.com/resource-library/portfolio-website-examples/): typography, interaction, and project storytelling.
- [Product manager portfolios](https://www.sitebuilderreport.com/inspiration/product-manager-portfolios): clear positioning and scannable work.

Original direction: lavender, graphite, and off-white; Manrope and DM Sans with italic serif accents; an interactive insight-to-product canvas. Google Fonts have system fallbacks. Illustrations are local CSS/SVG.

## Verification

`npx playwright test` uses locally installed Google Chrome to check filtering, dialog keyboard behavior, the canvas, resume download, reduced motion, and viewport overflow.

## Deploy to GitHub Pages

1. Open [Settings → Pages](https://github.com/Insha33/Portfolio/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open [Actions](https://github.com/Insha33/Portfolio/actions), select **Deploy portfolio to GitHub Pages**, and click **Run workflow** on `main` (or rerun the latest failed run).
4. When deployment finishes, visit **https://insha33.github.io/Portfolio/**.

Future pushes to `main` automatically rebuild and deploy. The workflow publishes `dist/`, and relative asset paths support the repository subdirectory. No secrets or separate hosting service are needed.

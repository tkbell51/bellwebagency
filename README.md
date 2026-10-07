# Bell Web Agency

The bellwebagency.com marketing site — a Nuxt 3 static site, deployed to Netlify.

Requires Node 22.5+ (Nuxt Content uses the built-in `node:sqlite`).

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:3000
npm run generate     # static build → .output/public (what Netlify deploys)
npm run preview      # preview the generated site
npm run lint         # ESLint
```

## Where things live

| What                                  | Where                                          |
| ------------------------------------- | ---------------------------------------------- |
| Site name, contact details, nav, CTAs | `config/site.ts`                               |
| Pricing (Launch Website, custom work) | `data/pricing.ts`                              |
| Process steps, services, FAQ          | `data/process.ts`, `services.ts`, `faq.ts`     |
| Start-a-project form options          | `data/project-start.ts`                        |
| Portfolio projects + testimonials     | `content/portfolio/*.md` → `/work/<file-name>` |
| Private prospect video pages          | `content/opportunity/*.md` → `/opportunity/…`  |
| Shared types                          | `types/index.ts`                               |
| Design tokens (colors, type scale)    | `tailwind.config.js`, `assets/css/main.css`    |
| Retired URL redirects                 | `nuxt.config.ts` and `public/_redirects`       |

Change a price, a CTA label, or contact details in one place and every page picks it up.

## Adding a project

Create `content/portfolio/<slug>.md`. The schema lives in `content.config.ts`:

```yaml
---
title: Client Name
description: One sentence about the project.
category: Industry
status: client # or `concept` — concept work is always labelled as such
featured: true # show on the home page
order: 3
year: 2026
createdAt: 2026-01-15
url: https://client.com/
services: [Website design, Website development]
image: /images/work/<slug>/cover.jpg # landscape crop of the homepage
desktopImage: /images/work/<slug>/full-page.jpg # full-length screenshot
gallery:
    - src: /images/work/<slug>/detail.jpg
      alt: Describe the image
testimonial: # optional — real quotes only
    quote: …
    author: …
    role: …
    image: /images/people/<name>.jpg
---
Short, factual description of the work.
```

Images live in `public/images` and are resized to WebP at build time by Nuxt Image.

## Forms

`/start` submits to **Netlify Forms** (form name `start-project`). Submissions only work on Netlify; in
`npm run dev` the form logs its payload to the console instead of sending it. `?plan=launch`,
`?plan=custom`, and `?need=update` preselect answers.

The Launch Website flow is designed to grow into **Choose → Pay → Onboard**. When checkout and the
onboarding system exist, hook them in `components/forms/StartProjectForm.vue` (see `nextSteps` in
`data/project-start.ts`), and point `support.requestUpdate` in `config/site.ts` at the support system.

## Tracking

Facebook Pixel and ActiveCampaign load in production only, after the page is interactive
(`plugins/facebook-pixel.client.ts`, `plugins/activecampaign.client.ts`).

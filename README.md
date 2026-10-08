# Bell Web Agency

The bellwebagency.com marketing site — a prerendered Nuxt 3 site served by a Cloudflare Worker, which also handles the Start a Project form.

Requires Node 22.5+ (Nuxt Content uses the built-in `node:sqlite`).

```bash
npm install            # install dependencies
npm run dev            # Nuxt dev server at http://localhost:3000 (the form logs instead of submitting)
npm run cf:dev         # full local preview: static build + Worker + local D1 at http://localhost:8787
npm run deploy         # build and deploy to Cloudflare
npm run lint           # ESLint
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
| Form API (Cloudflare Worker)          | `worker/`, `wrangler.jsonc`, `migrations/`     |

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

`/start` posts to `/api/start-project`, handled by the Cloudflare Worker in `worker/start-project.ts`. It
validates the submission against the options in `data/project-start.ts`, saves it to the `project_requests`
table in D1, then emails it to info@ through Cloudflare Email Service (replying to the email replies to the
client). If the email fails, the submission is still saved and marked `email_status = 'failed'`.

**Bot protection:** every submission must include a Cloudflare Turnstile token (widget sitekey and action in
`data/project-start.ts`). The Worker verifies it with siteverify before anything is saved or emailed, requiring
`success`, the `start_project` action, and a hostname listed in `TURNSTILE_HOSTNAMES` (`wrangler.jsonc`). The
secret is the Worker secret `TURNSTILE_SECRET`. For local `npm run cf:dev`, create a git-ignored `.dev.vars` with
`TURNSTILE_HOSTNAMES=localhost,127.0.0.1` and a `TURNSTILE_SECRET`; with Cloudflare's public test secrets, local
submissions are rejected (they carry no action), so test the success path on the live site.

`?plan=launch`, `?plan=custom`, and `?need=update` preselect answers. The Launch Website flow is designed to
grow into **Choose → Pay → Onboard**: hook checkout into the Worker and `StartProjectForm.vue` (see
`nextSteps` in `data/project-start.ts`), and point `support.requestUpdate` in `config/site.ts` at the
support system.

View recent submissions:

```bash
npx wrangler d1 execute bellwebagency --remote \
  --command "SELECT created_at, name, email, business, project_type, email_status FROM project_requests ORDER BY created_at DESC LIMIT 20"
```

## Cloudflare setup (one time)

1. `npx wrangler login`
2. `npx wrangler d1 create bellwebagency` — paste the returned `database_id` into `wrangler.jsonc`.
3. `npm run db:migrate` — creates the `project_requests` table.
4. **Email Service:** in the Cloudflare dashboard, onboard `bellwebagency.com` as a sending domain. It adds
   records on a `cf-bounce` subdomain and leaves Google Workspace mail alone. If it proposes a DMARC record
   of `p=reject`, keep the existing `p=none` until Google DKIM shows "Authenticating email".
   Never enable **Email Routing** — it replaces the Google MX records.
5. `npm run deploy`, then submit a test on the `*.workers.dev` URL.
6. **Go live:** Worker → Settings → Domains & Routes → add `bellwebagency.com` and `www.bellwebagency.com`.
   This replaces the DNS records that currently point at Netlify; remove the Netlify site afterwards.

Local testing: `npm run db:migrate:local`, then `npm run cf:dev`. Locally, Wrangler simulates the email
instead of sending it.

## Analytics

There are no third-party trackers. Traffic stats come from Cloudflare Web Analytics (cookieless), enabled in
the Cloudflare dashboard rather than in code. The `facebook-domain-verification` meta tag in `nuxt.config.ts`
only proves domain ownership to Meta; it doesn't track visitors.

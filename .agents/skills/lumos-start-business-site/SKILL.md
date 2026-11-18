---
name: lumos-start-business-site
description: Turn this starter into a local-business website. Use when the user wants to start, set up, customize or build out a new client site from this template, or asks for a landing page with Home, About, Services, Products and Contact sections. Runs an intake (business, design system, single vs multi-page, business specifics), then builds a smooth-scrolling landing page, nav and footer on Lumos for Astro.
---

# Starting a local-business site

This repo is a reusable starter. Every client project begins as a fresh copy of
it, and this skill tailors the copy. It is generic on purpose: nothing about a
specific client belongs in the starter itself, only in the copy.

Read `LUMOS.md` before writing anything. Its component and style rules apply to
everything below. This is Lumos for Astro, not Lumos for Webflow.

## 1. Check this is a client copy

Before changing anything, confirm the user is working in a copy made for a
client, not the starter repo itself.

- If `PROJECT.md` exists, the intake has been done. Read it, tell the user what
  is recorded, and ask what they want to change. Do not repeat the intake.
- If the working directory is the starter itself (its `package.json` name is
  `lumos-business-starter` and the user hasn't said they copied it), ask
  whether to continue here or in a copy. Never put client details into the
  starter repo.
- Do not run the dev server. The user runs `npm run dev`.

## 2. Run the intake

Ask the questions in [intake.md](intake.md): business, design system, pages,
and business specifics.

- Ask a few at a time, conversationally. Use the question tool for
  multiple-choice items.
- Skip anything the user already told you, or that a Figma file, logo or
  existing site answers.
- Never invent answers. Where a detail is missing, use an obvious placeholder
  and carry it into the handoff list.
- The "one page or multiple pages?" question is required. Do not assume.
- Write the answers to `PROJECT.md` at the project root (business, design
  decisions, page list, open placeholders) so later sessions and other agents
  have the context.

## 3. Record the facts once

Client facts live in two places, never in markup:

- `src/consts.ts`: `SITE_NAME`, `SITE_DESCRIPTION`, `SITE_URL`, `SITE_LOCALE`.
- `src/data/business.ts`: contact details, hours, socials and the nav list.
  The hero, contact section, footer and structured data all read from it.

Update `package.json` `name` for the client. Leave the `lumos` metadata alone.

## 4. Design system

Colors, type and spacing are tokens in `src/styles/base.css`. Change them there
and nowhere else. Never recolor page by page.

- If the user has a Figma file, use the `lumos-import-figma` skill.
- Otherwise propose a palette and type pairing from the mood they gave, show the
  hex values, and get approval before editing tokens.
- Replace the logo in `src/assets/logo/` and the favicon in `public/`.
- Self-host fonts as `woff2` in `src/assets/fonts/`. Check licensing.

## 5. Build the site

### Default shape

A single landing page, `src/pages/index.astro`, one `Section` per nav item,
in this order:

| Nav      | id         | Content |
| -------- | ---------- | ------- |
| Home     | `home`     | Hero: name, one-line value proposition, primary call to action |
| About    | `about`    | Story, owner or team, years in business, service area, trust signals |
| Services | `services` | `Grid` of `Card`s, each a service with a short description |
| Products | `products` | What they sell. Drop the section and its nav item for service-only businesses |
| Contact  | `contact`  | `Form`, phone, email, address, hours, map link |

Sections and nav items come from the same list in `src/data/business.ts`, so
they cannot drift apart. Confirm `Section` accepts an `id`; if it does not, add
that as a prop on `Section` following the New component checklist, not a wrapper
`div`.

### Nav (`src/components/global/Nav.astro`)

- Nav and Footer already map over `NAV_ITEMS` in `src/data/business.ts`. Edit
  the list, not the components. Links are `/#about`, not bare `#about`, so they
  keep working from subpages.
- Smooth scrolling is CSS: `scroll-behavior: smooth` on `html` inside
  `@media (prefers-reduced-motion: no-preference)`, in `src/styles/`. Check
  `global.css` and `base.css` for an existing rule first.
- Give anchored sections `scroll-margin-top: var(--nav-height)` so the sticky
  nav does not cover headings.
- Keep the existing mobile menu, which already closes on link click.
- Add a nav call to action (call, book) when the business lives on calls or
  appointments.
- Highlighting the current section on scroll is optional: a small
  `IntersectionObserver` in the Nav script setting `aria-current`.

### Footer (`src/components/global/Footer.astro`)

The Footer already reads `BUSINESS`, `SOCIALS` and `NAV_ITEMS` and renders the
logo, tagline, nav links, `tel:`/`mailto:` contact block, opening hours, social
links and copyright. Edit the data, not the markup. Placeholder socials use `#`
hrefs until the client supplies URLs; remove platforms the client lacks. Add
Privacy and Terms links to `NAV_ITEMS` or the footer if those pages exist.

### Multiple pages

If the intake says multiple pages:

- Add each at `src/pages/<name>.astro`, or `src/pages/services/[slug].astro`
  for a set generated from content.
- Keep the landing sections as summaries that link to the full pages.
- Drive Nav and Footer from one list.
- Use a content collection for repeating content (services, products, team,
  posts, testimonials). Read the Astro content collections guide first.

For anything else Astro-specific (routing, i18n, styling) read the matching
Astro docs listed in `AGENTS.md` before building.

### Rules that matter most here

- Compose from `Section`, `ContentWrapper`, `Eyebrow`, `Heading`, `Paragraph`,
  `ButtonWrapper`, `Grid`, `Card`. Create a custom component only when custom
  CSS or script belongs to it, and walk the checklists in `LUMOS.md`.
- No `px`, no custom class on a library component instance, no page-level CSS.
- Every image uses `Img` with real `alt` text, or `alt=""` if decorative.
- One `h1` per page, in the hero. Headings descend in order.
- Set per-page title and description through the layout's SEO props. When the
  address, phone and hours are real, add `LocalBusiness` JSON-LD to the layout
  with `sameAs` socials.
- Keep it fast: no heavy libraries, lazy-load below-the-fold images.

## 6. Verify and hand off

- Run `npm run check` and `npm run build`. Report failures with their output.
- Remove `src/pages/example-components.astro` and its nav and footer links
  before launch, unless the user wants to keep it for now.
- Replace the style-guide landing content in `src/pages/index.astro`.
- Finish with the handoff list from [intake.md](intake.md#handoff-checklist),
  each item marked done or still a placeholder, and update `PROJECT.md` to match.

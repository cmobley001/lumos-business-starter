# Lumos Business Starter

A starter for local-business websites, built on [Lumos for Astro](LUMOS.md)
(Astro and plain CSS with custom properties). It ships a smooth-scrolling
landing page shape (Home, About, Services, Products, Contact), a footer, and an
agent skill that interviews you about the client and builds the site.

## Start a new client site

1. On GitHub, click **Use this template** (or `gh repo create my-client --template <owner>/<repo> --clone`).
2. Install and open it in your coding agent:

   ```bash
   npm install
   ```

3. Ask the agent: *"Start a new business site"* (Claude Code: `/lumos-start-business-site`).
   It asks about the business, design, pages and details, records the answers
   in `PROJECT.md`, and builds the site.
4. Run `npm run dev` yourself to preview.

## What is in here

| Path | Purpose |
| ---- | ------- |
| `LUMOS.md` | Rules for building pages, components and styles |
| `AGENTS.md` | Instructions every coding agent reads first |
| `.agents/skills/lumos-start-business-site/` | The intake and build procedure |
| `src/data/business.ts` | Client facts and nav list, written once |
| `src/consts.ts` | Site name, description, URL |
| `src/styles/base.css` | Design tokens: colors, type, spacing |

## Keeping the starter generic

Client details go in the copy, never in this repo. Improvements that every
client would want (a better footer, a new section pattern) go back into the
starter.

Licence: MIT.

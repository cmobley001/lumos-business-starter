# Lumos for Astro

This is **Lumos for Astro**, an Astro component framework styled with plain CSS
and custom properties. Do not apply conventions from **Lumos for Webflow**.
Project conventions live in `LUMOS.md` and `.agents/skills/`.

## Development

Do not run the dev server in the background. The user starts it themselves in
a terminal with `npm run dev`. Do not start it unless asked.

## Astro documentation

Use the relevant [Astro documentation](https://docs.astro.build) before working
on these areas:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Building

Read [LUMOS.md](LUMOS.md) before adding pages, components, or styles.

This repo is a reusable starter for local-business sites. To begin a client
site, use the `lumos-start-business-site` skill and its intake before writing
code. Keep client details out of the starter itself.

## Skills

Task-specific procedures live in `.agents/skills/<name>/SKILL.md`, alongside
any scripts they need.

- `lumos-import-figma` — build pages or variables from a Figma file.
- `lumos-audit-props` — check prop order and tooltip consistency.
- `lumos-scaling-graphic` — build an editable graphic that scales as one piece.
- `lumos-import-webflow` — migrate a Webflow export and connect its CMS.
- `lumos-upgrade-version` — upgrade Lumos without losing customizations.
- `lumos-start-business-site` — turn this starter into a local-business site
  after an intake on the business, design, pages and details.

`.agents/skills/` is the source of truth. Claude Code loads the same skills from
relative symlinks in `.claude/skills/`. For each new skill, add
`.claude/skills/<name>` pointing to `../../.agents/skills/<name>`.

- Codex: use `$lumos-import-figma` or ask for the skill by name. Restart Codex
  if a new skill does not appear.
- Claude Code: use `/lumos-import-figma` or let it load the skill when relevant.
- Other assistants: read `SKILL.md` directly. Instructions are Markdown and
  scripts are Node.

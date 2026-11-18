# Intake questions

Ask in groups. Skip what is already known. Record the answers in `PROJECT.md`.

## 1. The business

- Business name, and what it does in one sentence
- Type: restaurant, trades, salon, clinic, retail, professional services, other
- Town and service area
- Who the customers are, and the one action you want them to take (call, book,
  visit, order, request a quote)
- Years in business, owner or team details, licences, certifications, awards
- Existing copy, photos and logo, or should placeholders be used?

## 2. Design system

- Brand colors (hex), or a logo or existing site to take them from. With none,
  ask for a mood (warm, clean, bold, calm, premium) and propose a palette
- Light, dark or mixed theme
- Fonts: keep the framework default, or specific families?
- Corner style (sharp, slightly rounded, pill) and overall feel (minimal,
  friendly, editorial)
- Reference sites the client likes
- A Figma file? Use `lumos-import-figma`

## 3. Pages

Ask directly: **one page, or multiple pages?**

- One page: the default landing page only.
- Multiple: which? Common choices are a page per service, About, Gallery or
  Portfolio, Blog or News, FAQ, Careers, Privacy, Terms.

## 4. Business specifics

Ask what applies and skip the rest.

- **Contact**: phone, email, street address, preferred contact method, who
  receives form submissions
- **Hours**: regular, holiday exceptions, appointment only
- **Forms**: contact, quote, booking, newsletter. Where do submissions go
  (Formspree, Netlify Forms, email API, client backend)? Spam protection?
- **Booking or ordering**: embedded widget (Calendly, Square, Toast,
  OpenTable), link-out, or none
- **Map**: embed, link only, or none. Default to a link for privacy and speed
- **Social**: which accounts exist, with URLs
- **Reviews**: testimonials? Hand-picked, or pulled from Google?
- **Products**: catalog, prices shown, online checkout (out of scope unless the
  client asks)
- **SEO**: primary keywords, service area, Google Business Profile status
- **Analytics and cookies**: any analytics? Is a consent banner needed for the
  client's region?
- **Legal**: privacy policy, terms, accessibility statement
- **Languages**: more than one? Read the Astro i18n guide
- **Domain and hosting**: domain, host (Netlify, Vercel, Cloudflare Pages,
  other), final `SITE_URL`
- **Launch**: target date, who supplies content, who approves

## Handoff checklist

Report each item as done or still a placeholder.

- [ ] Name, description and URL in `src/consts.ts`
- [ ] Contact, hours and socials in `src/data/business.ts`
- [ ] Brand colors and fonts in `base.css`
- [ ] Logo and favicon
- [ ] Hero copy and call to action
- [ ] About, Services and Products copy and images
- [ ] Contact form endpoint tested
- [ ] Social links real or removed
- [ ] Map and booking embeds
- [ ] `LocalBusiness` structured data
- [ ] Privacy and terms pages, if needed
- [ ] Example and style-guide content removed
- [ ] `npm run check` and `npm run build` pass

# Funngro

## Current State
New project — no existing code.

## Requested Changes (Diff)

### Add
- 2-page SaaS marketing website for Funngro
- Page 1: Teen Portal — focused on "Earn" for Teenlancers (ages 14–22)
  - Hero: "Your First Step into the Professional World"
  - Bento-grid showcasing service categories (AI prompting, web dev, content, etc.)
  - FAQ section with SEO-rich structured content
  - CTA: "Join as Teen"
- Page 2: Company Portal — focused on "Hire" for businesses
  - Hero: "Scale Your Business with Gen-Z Talent"
  - 3-step Process section: Post → Match → Scale
  - CTA: "Post a Project"
- Shared navigation with toggle between Teen and Company portals
- Mobile-responsive layout throughout
- A backend to store CTA signups (email + role: teen | company)

### Modify
- None (new project)

### Remove
- None

## Implementation Plan
1. Backend: Canister to store waitlist/signup records with fields: email, role (teen | company), timestamp. Expose `submitSignup(email, role)` and `getSignups()`.
2. Frontend routing: Two pages via React Router — `/` (Teen Portal) and `/companies` (Company Portal).
3. Shared nav: Logo, nav links "For Teens" / "For Companies", and sticky header.
4. Teen Portal page: Hero section, Bento-grid of 6 service cards, FAQ accordion, CTA section.
5. Company Portal page: Hero section, 3-step process cards, social proof/stats bar, CTA section.
6. Signup modals: Email capture form wired to backend `submitSignup`.
7. Design tokens: Dark theme (#121212 mapped to OKLCH), neon green accent (#39FF14 → OKLCH), Inter/Mona Sans typography.
8. Full mobile responsiveness via Tailwind breakpoints.

# Funngro

## Current State
A 2-page SaaS website built with React + Tailwind on ICP. Uses a dark #121212 theme with neon green (#39FF14) accents. Pages are TeenPortal (/) and CompanyPortal (/companies). Backend supports signup by role (teen/company). Existing components: Navbar, Footer, SignupModal.

## Requested Changes (Diff)

### Add
- `index.css`: Funngro orange/white professional color palette (primary = orange ~#FF6B1A, backgrounds white/light-gray, text dark)
- TeenPortal: Shark Tank India featured section with badge/banner
- TeenPortal: "Download App" CTA button (links to app store placeholder)
- TeenPortal: Updated service categories to explicitly include Social Media, Video Creation, Graphic Design, Content Writing, Web Development, AI Prompting
- TeenPortal: H1 "Earn & Learn with Funngro" (SEO: "freelance jobs for students")
- TeenPortal: SEO meta-style subheadings (H2s) — "Skills You Can Monetize", "How It Works for Teens", "FAQs for Student Freelancers", "Start Earning Today"
- CompanyPortal: H1 "Smart Talent Solutions for Growing Businesses" (SEO: "hire smart talent", "hire student freelancers")
- CompanyPortal: Stats updated — 45L+ users, post in 2 minutes
- CompanyPortal: H2 subheadings — "Post a Project in 2 Minutes", "Why Businesses Choose Funngro", "Hire Smart Talent Today"
- Both pages: `<title>` and `<meta description>` via react-helmet or inline document.title updates for SEO

### Modify
- `index.css`: Replace dark neon-green theme with light professional orange/white theme. White background, orange primary, dark text, clean card surfaces.
- `Navbar.tsx`: Update to work with light theme (dark text on white nav)
- `Footer.tsx`: Update to light theme
- TeenPortal hero: New headline and sub-headline focused on "Earn & Learn"
- TeenPortal stats: Update to reflect accurate Funngro scale (45L+ users)
- CompanyPortal hero: New headline "Smart Talent Solutions" and 45L+ user stat
- CompanyPortal process steps: Update copy to "Post in 2 minutes"
- Both pages: Remove neon-glow utilities; replace with orange shadow/accent styles

### Remove
- Dark background theme (neon green) entirely from index.css and all page components
- Neon-specific utility classes (neon-glow, neon-text, neon-border) — replace with orange equivalents

## Implementation Plan
1. Update `index.css` — switch OKLCH tokens to orange primary (oklch ~0.65 0.22 45) and white/light backgrounds
2. Add orange-glow and orange-accent utilities to replace neon-green ones
3. Revamp `TeenPortal.tsx`:
   - H1: "Earn & Learn with Funngro — Freelance Jobs for Students"
   - H2s: "Skills You Can Monetize", "How It Works for Teens", "Frequently Asked Questions", "Start Earning Today"
   - Services list: Social Media, Video Creation, Graphic Design, Content Writing, Web Development, AI Prompting
   - Shark Tank India section: banner with TV logo treatment, "As Seen on Shark Tank India" badge
   - Download App button: orange CTA with app store icons (Apple/Android)
   - Stats: 45L+ Users, 500+ Companies, 10+ Categories
4. Revamp `CompanyPortal.tsx`:
   - H1: "Smart Talent Solutions — Hire Smart Talent for Your Business"
   - H2s: "Post a Project in 2 Minutes", "Why Businesses Choose Funngro", "Hire Smart Talent Today"
   - Stats: 45L+ Users, 2 Min to Post, 60% Cost Savings
   - Process step 1 updated: "Post in 2 minutes"
   - Hero sub-headline: reference 45L+ users, cost-effective, innovative Gen-Z work
5. Update Navbar + Footer color classes for light theme
6. Set document.title per page for basic SEO

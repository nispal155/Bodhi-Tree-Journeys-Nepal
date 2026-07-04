# AI Handoff Protocol

## Project Overview & Current State
We are building a high-conversion, single-page website for a premium travel and tour operator in Nepal named **Bodhi Tree Journeys Nepal**. The layout, visual theme, and spacing must precisely match the provided `demo-travel-theme.pdf` design reference.

**Important Environment Note:** 
The project was originally located in a Google Drive synced folder which caused severe performance degradation and extremely slow compilation times with Next.js Turbopack. **The user will be moving this project locally to their machine (e.g., Desktop/Documents) to resolve file-system blocking issues.**

**Current State (All Frontend Tasks Completed):**
- **Architecture Setup:** Created the `src` directory and moved the `app` directory inside to follow standard Next.js `src` conventions.
- **Foundational Config:** 
  - Updated `src/app/layout.tsx` to include proper metadata ("Bodhi Tree Journeys Nepal") and added `scroll-smooth` for smooth anchor linking.
- **Component Architecture (`src/components`):**
  - **`Navigation.tsx`**: Sticky/transparent navbar featuring mobile-responsive toggle and seamless anchor links.
  - **`Hero.tsx`**: Immersive Himalayan visual background with dynamic typography and dual CTAs.
  - **`AboutUs.tsx`**: Core statistics and company ethos highlighting the authentic spirit of Nepal.
  - **`TourCategories.tsx`**: Interactive grid with hover-zoom effects for the 8 mandated tour categories.
  - **`ValueAddedServices.tsx`**: Responsive grid utilizing `lucide-react` mapping out all 11 unique value-added services.
  - **`Testimonials.tsx`**: Elegant card layout with star ratings for traveler reviews.
  - **`FAQAccordion.tsx`**: Fully interactive accordion component including a highlighted "Cultural Respect Guidance" box.
  - **`ContactForm.tsx`**: Built out structurally using `@web3forms/react` with native success-state handling entirely on the client-side.
  - **`Footer.tsx`**: Dark-themed footer wrapping up the site with navigation links and social placeholders.
- **Page Assembly:** Implemented and integrated all the modular frontend sections into `src/app/page.tsx` sequentially.

## Exact Technical Stack & Architecture
- **Framework:** Next.js 14/15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** `lucide-react`
- **Forms:** Secure Web3Forms integration via Next.js API Route (`src/app/api/contact/route.ts`)
- **Validation:** `zod` schema validation
- **Directory Structure:** Standard Next.js `src/app` router setup with `src/components` for modular UI components.
- **Backend/DB:** Next.js Serverless API Route used purely for form submission proxy.

## Security Configurations Implemented
1. **API Route Architecture:** Web3Forms submission occurs securely on the server-side via `/api/contact/route.ts` to hide the API key from the client browser.
2. **Honeypot Protection:** A hidden `botcheck` input field drops automated spam submissions silently without disrupting real users.
3. **Input Sanitization:** `zod` strictly types, validates, and sanitizes all form inputs before forwarding to the upstream Web3Forms service.
4. **Next.js Security Headers:** Configured in `next.config.ts`:
   - `Content-Security-Policy (CSP)` limits scripts, frames, and connections to trusted origins.
   - `X-Frame-Options` is set to `DENY`.
   - `X-Content-Type-Options` is set to `nosniff`.
   - `Referrer-Policy` is `strict-origin-when-cross-origin`.

## Last Active Task
- Re-architected Web3Forms contact form to use a secure server-side API handler.
- Configured mandatory Next.js HTTP Security headers.
- Implemented honeypots and `zod` input validation.
- Updated all contact information (email to `contact@bodhitreejourneysnepal.com`, phone to `+977 9713883831`).
- Upgraded the Hero section to include an auto-playing image carousel using `framer-motion`.
- Implemented a zero-configuration Math Captcha in the contact form to deter bots.
- Implemented dynamic back button logic in `packages/[slug]/page.tsx` based on the tour type.

## Immediate Next Steps (For the User / Next Agent)
1. **Production Environment Variables:** You MUST add `WEB3FORMS_ACCESS_KEY` to your hosting provider's (e.g., Vercel) environment variables for the form to work in production.
2. **Cross-browser / Device Testing:** Verify responsiveness and interactive hover states.

## Known Blockers & Open Issues
- Actual image assets are currently missing and rely on placeholders.

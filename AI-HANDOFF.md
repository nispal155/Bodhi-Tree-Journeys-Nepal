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
- **Forms:** `@web3forms/react`
- **Directory Structure:** Standard Next.js `src/app` router setup with `src/components` for modular UI components.
- **Backend/DB:** None (Client-side functionality only per user requirement).

## Last Active Task
- Fully built out all frontend components outlined in the design spec (`demo-travel-theme.pdf`).
- Imported and composed all components within the main `page.tsx` file.
- Documented the requirement to move the project out of Google Drive for optimal Next.js compiling.

## Immediate Next Steps (For the User / Next Agent)
1. **Move Project Locally:** Move the entire `explore-nepal-travels` directory out of Google Drive and onto a local drive (like the Desktop) to fix compilation speed issues. Run `npm install` again if node_modules act up after the move.
2. **Asset Integration:** Replace placeholder image paths (e.g., `/hero-placeholder.jpg`, `/placeholder-tour-1.jpg`) with actual high-quality Himalayan assets. Ensure all images are placed in the `/public` directory.
3. **Web3Forms Configuration:** The `ContactForm.tsx` needs the `YOUR_ACCESS_KEY_HERE` replaced with the actual client's access key for emails to route properly.
4. **Cross-browser / Device Testing:** Verify responsiveness and interactive hover states (e.g., Tour Category cards, Value-Added Services icons) across mobile, tablet, and desktop viewports.

## Known Blockers & Open Issues
- Actual image assets are currently missing and rely on placeholders.
- The contact form is functional structurally but requires the live Web3Forms access key to finalize delivery testing.

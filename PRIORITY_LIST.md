# The Gen Z Mama - Updated Priority List

We have successfully established the core visual identity (Hero, About, Services) and functionality (Blog, Contact). The focus now shifts to "depth" — finishing pages, optimizing for real users (SEO/Performance), and adding that special interactive flair.

## Phase 1: Completing the Content Structure (Completed)
1.  **Reviews Page (`src/app/reviews`)** - [x] Done
2.  **Mobile Menu Perfection** - [x] Done

## Phase 2: SEO & Performance (Completed)
1.  **Metadata Overhaul** - [x] Added `metadataBase`, OpenGraph tags, and auto-generated `opengraph-image`.
2.  **Image Optimization** - [x] No raster images currently used; placeholders are CSS/SVG.

## Phase 3: The "Gen Z" Touch (Animations & Interactions)
1.  **Smooth Scrolling** - [x] Done (Implemented via Lenis in `SmoothScroll.tsx`)
    *   **Goal**: Premium feel.
    *   **Action**: Implement `lenis` for smooth momentum scrolling.
2.  **Page Transitions** - [x] Done (Implemented via `template.tsx`)
    *   **Goal**: Make navigating the "scrapbook" feel seamless.
    *   **Action**: Implement `framer-motion` page transitions (e.g., crossfade or paper-slide effect).
3.  **Micro-Interactions** - [x] Done
    *   **Goal**: Delightful small details.
    *   **Action**: Add "lift" effects to washi tape on hover (Done in `WashiTape.tsx`), parallax scrolling for background elements (Done in `Hero.tsx`).

## Phase 4: Long-term / Admin
1.  **CMS Integration (Future)**
    *   Eventually migrate the `data.ts` blog posts and testimonials to a headless CMS (Sanity.io) so Yan can update them easily from her phone.

# The Gen Z Mama - Project Priority List

Based on the current codebase state and project goals, here is a detailed priority list to move the project from "Skeleton" to "Production-Ready".

## Phase 1: Visual Polish & Asset Integration (Immediate Priority)
The site structure is there, but "placeholders" kill the immersion.

1.  **Hero Section (`src/app/components/sections/Hero.tsx`)**
    *   **Replace Placeholder Image**: Generate or source a "Candid Photo of Yan" for the main Polaroid.
    *   **Implement Torn Edge**: Add the `TornEdge` component to the bottom of the Hero section (currently a comment).
    *   **3D Integration**: Verify `Scene` and `Hero3D` are rendering correctly and unobtrusively.

2.  **Service Visuals**
    *   **Map Visualization**: Replace the "Google Map placeholder" in `/services` with a custom map graphic (styled to match the "Paper/Scrapbook" theme) showing the 20-mile radius around Dover, NJ.
    *   **Pricing Table**: Ensure the "Polaroid-styled pricing table" is responsive and readable on mobile.

3.  **Trust & Social Proof**
    *   **Testimonials**: Move the static testimonial in `page.tsx` to a dedicated component (`TestimonialCarousel` or similar) so multiple reviews can be shown.
    *   **Trust Icons**: Replace "TrustBar" placeholder icons with actual relevant icons (CPR Certified, Background Checked, etc.) using a hand-drawn or consistent style.

## Phase 2: Functionality & Interaction

1.  **Contact Form (`src/app/contact/page.tsx`)**
    *   **Upgrade Submission**: Currently uses `alert()`.
        *   *Option A (Low Tech)*: Format the `mailto` link robustly and show a "Draft Created" modal with instructions.
        *   *Option B (Production)*: Implement a Next.js Server Action with an email provider (Resend, SendGrid) to actually send emails.
    *   **Feedback**: showing a success message/modal after submission instead of a browser alert.

2.  **Blog System (`src/app/blog`)**
    *   **Single Post Page**: Implement `src/app/blog/[id]/page.tsx`. It needs to render markdown or rich text content within the "Paper" layout.
    *   **CMS Integration**: Decide if posts are MDX files (local) or fetched from a CMS (Sanity, Contentful). For now, ensure the "Mock Data" logic is robust enough to demo specific posts.

3.  **Navigation**
    *   **"About Yan" Link**: User previously reported a 404. specific "About" page vs anchor link in Home. Verify routing logic.
    *   **Mobile Menu**: Verify the `Navbar` mobile menu works smoothly with the `Lenis` smooth scroll (locking body scroll when open).

## Phase 3: SEO & Performance

1.  **Metadata**: Update `src/app/layout.tsx` with rich Open Graph (OG) tags, Twitter card tags, and proper keywords for "Childcare in Dover NJ".
2.  **Images**: Ensure all new images use `next/image` with proper `priority` flags for LCP (Largest Contentful Paint) elements like the Hero image.
3.  **Fonts**: Verify `Patrick Hand` and `Quicksand` are loading without layout shift (CLS).

## Phase 4: "Wow" Factors (The Gen Z Touch)

1.  **Micro-Interactions**: Add hover states to all interactive elements (Polaroids tilting, Washi tape lifting).
2.  **Page Transitions**: Use `framer-motion` or GSAP to soft-transition between pages (e.g., a "page turn" or "fade in" effect) to maintain the paper illusion.

# Gen Z Mama — out of production

This repository is no longer running a live site. The branch deployed by Netlify
publishes a single blank page (`site/index.html`) with no build step, no
dependencies, and no serverless functions.

Every path returns that blank page, so none of the previous pages, the Sanity
Studio at `/studio`, or the contact form endpoint are reachable any more.

## Where the site went

Nothing was deleted. The complete Next.js application — marketing pages, Sanity
Studio, blog, contact form, images — is preserved in git:

| What | Where |
| --- | --- |
| Final production snapshot | branch `backup/production-site-final` (commit `97b8775`) |
| Full history | this repository's commit history, unchanged |

Browse or download it on GitHub:
<https://github.com/montjeffrey/GenZMAMA/tree/backup/production-site-final>

## How to restore the site

```bash
# Look at the archived site
git checkout backup/production-site-final
npm install
npm run dev

# Or bring it back to the deployed branch
git checkout main
git restore --source=backup/production-site-final -- .
git commit -m "Restore production site"
```

The restored app needs these environment variables (set in Netlify, and in a
local `.env.local` for development):

- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`
- `RESEND_API_KEY`, `CONTACT_EMAIL`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

## Remaining cleanup outside this repository

Taking the repo out of production does not touch the third-party services. If you
want them shut down too, do it in each provider's dashboard: the Netlify site
itself (stop builds or delete the site), the Sanity project and dataset, and the
Resend, Turnstile, and Google Maps API keys.

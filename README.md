# Motahareh — practice website

Static site for a psychotherapy and Islamic psychospiritual practice.
Hosted on GitHub Pages at **motahareh.ca** (see `CNAME`).

## How it works

There is no build step. Each page is a plain HTML shell that loads React, Babel, and
Tailwind from a CDN, then renders one `.jsx` file in the browser.

| Page | Shell | Content |
| --- | --- | --- |
| Home | `index.html` | `home.jsx` |
| About | `about.html` | `page-about.jsx` |
| Psychotherapy | `psychotherapy.html` | `page-psychotherapy.jsx` |
| The Return | `the-return.html` | `page-the-return.jsx` |

`shared.jsx` holds everything common to all four pages: the nav, footer, credential
strip, closing call-to-action, cross-links, and the small primitives (`SectionHeader`,
`BookCTA`, `MonoLabel`, `TextLink`). Every page loads `shared.jsx` first, then its own file.

The design tokens — colours, fonts, the paper-grain and placeholder textures — live in the
`<head>` of each shell. They are identical across shells; change one, change all.

## Running it locally

The pages fetch their JSX over HTTP, so opening the files directly from disk will not work.
Serve the folder instead:

```bash
python -m http.server 8080
```

Then visit http://localhost:8080. In Claude Code, `.claude/launch.json` starts the same
server under the name `site`.

## Editing content

Nearly all copy lives in plain arrays and props near the top of each component, so text
changes rarely require touching markup. Site-wide values — the booking URL, the contact
address, and the nav/footer page list — are constants at the top of `shared.jsx`.

Two services are offered: **Psychotherapy** and **The Return**. Yoga, breathwork, and
embodiment appear throughout as modalities inside that work, not as a bookable service.

## Before going live

A few things are placeholders and need real values:

- **`BOOKING_URL` in `shared.jsx`** points at `https://mepro.ai`. Swap in the specific
  practitioner booking link once it exists.
- **Credentials on `about.html`** contain bracketed placeholders (degree, trainings,
  languages). Fill these in or delete the rows.
- **Fees** — `$175` per 50-minute session and the insurer list are carried over from the
  previous version of the site. Confirm both.
- **Photography** — every image is a hatched placeholder block. Replace with real photos.
- **`hello@motahareh.ca`** is used for every contact link.

# The Overview deck

This folder holds the slide images for `/overview` — the fast-track summary for
recruiters who want the two-minute version instead of the full project writeups.

Until you add slides, `/overview` shows a placeholder message and the "In a hurry?"
banner on `/projects` stays hidden. Nothing breaks.

## Exporting from PowerPoint

**1. Slides → PNG (this folder)**

> File → Export → Change File Type → PNG → Save As → **All Slides**

PowerPoint creates a folder of images. Move them into `src/assets/deck/`.

If it asks for a resolution, choose **1600px wide or larger**. PowerPoint's default
(960×720) looks soft on retina screens. If there's no resolution prompt, export at
the default and check how it looks — you can always re-export bigger.

**2. Deck → PDF (`public/overview.pdf`)**

> File → Export → Create PDF/XPS

Save it as `public/overview.pdf` — exactly that name and location.

This step is **optional**. The "Download PDF" button only renders once that file
exists, so the page is never left with a broken link. Add the PDF and the button
appears on the next build; skip it and the slide gallery works fine on its own.

## Ordering

Slides are sorted **numerically by filename**, so PowerPoint's default names work
as-is:

```
Slide1.PNG, Slide2.PNG, ... Slide10.PNG, Slide11.PNG
```

These sort correctly (1, 2, … 10, 11), not as plain text would (1, 10, 11, 2, 3).

To reorder, rename the files. To drop a slide, delete it. No code changes either
way — the page picks up whatever is in this folder.

## Updating the deck later

Delete the PNGs in this folder, re-export, and replace `public/overview.pdf`.
That's the whole update.

> **If new slides don't show up in `astro dev`, restart the dev server.** Slides are
> discovered with `import.meta.glob`, which is evaluated once when the module first
> loads — adding files to a folder that was empty at startup won't always be picked
> up by hot reload. `astro dev stop && astro dev --background`. A production build
> is never affected.

## Why images and not an embedded PDF

iOS Safari and Android Chrome don't render PDFs embedded in a page reliably — iOS
usually shows page one with no scrolling, Android often forces a download. Since
recruiters frequently browse on phones, slide images guarantee the deck actually
works there. They also get optimized into WebP/AVIF at build time like every other
image on the site, so the page stays fast.

The PDF is still there as a download for anyone who wants to keep a copy.

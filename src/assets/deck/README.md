# The Overview deck

The fast-track summary for recruiters who want the short version instead of the
full project writeups. The "In a hurry?" banner on the homepage and `/projects`
links straight at it.

## The only step

> PowerPoint → File → Export → Create PDF/XPS

Save it as **`public/overview.pdf`** — exactly that name and location. That's the
whole update: replace the file, rebuild, done.

The banner only renders once that file exists, so the site is never left with a
broken link. Remove the PDF and the banner disappears on the next build.

## The PNGs in this folder are no longer used

The deck used to render as a gallery of slide images at `/overview`, which is why
`Slide1.PNG … Slide12.PNG` are sitting here. That page has been retired in favour
of linking the PDF directly, and nothing imports these files any more — they cost
nothing at build time, but they're roughly 16 MB of dead weight in the repo and
can be deleted whenever you like.

**Worth knowing about the tradeoff:** the gallery existed because iOS Safari and
Android Chrome handle PDFs inconsistently — iOS often shows page one without
scrolling, Android tends to force a download instead of displaying it. Since the
banner now opens the PDF in a new tab, a recruiter on a phone may get their
browser's PDF viewer or a download rather than an inline read. If that turns out
to matter, the gallery approach is in the git history.

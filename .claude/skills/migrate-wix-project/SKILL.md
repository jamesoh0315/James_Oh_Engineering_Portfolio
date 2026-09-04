---
name: migrate-wix-project
description: Migrate one project page from James's old Wix portfolio into this Astro site as an MDX case study, following the format established by Hybrid Spindle Liner, Clamping Shaft Coupler, and Shaft Spline Adapter. Use when asked to "migrate a project from Wix," "add [project] from the old site," or similar.
---

# Migrating a project from Wix

The user gives a Wix URL and says the local images are already uploaded to
`src/assets/<ProjectName>/`. Goal: a new MDX file in `src/content/projects/`,
correctly ordered, built and type-checked clean, with every image from the
folder either used or explicitly flagged as unused.

## 0. Read the reference pages first

Before writing anything, read `src/content/projects/Hybrid Spindle Liner.mdx`
(the format's origin) and the most recently added project MDX (`git log
--diff-filter=A -- 'src/content/projects/*.mdx'` to find it). Formatting has
drifted through manual user edits each time — the latest file is the current
convention, not this skill's memory of it. Also read
`src/components/Figures.astro` and `src/components/FigureSplit.astro` in full;
both carry usage notes in their header comments.

## 1. Extract the Wix page content

**`WebFetch` alone is not enough.** Wix pages are JS-rendered client-side;
`WebFetch` only reliably returns header/footer chrome and misses the actual
project body. Instead, pull the raw HTML and parse the server-rendered content
directly — Wix does include full text server-side inside
`wixui-rich-text` divs, in document order:

```bash
curl -sL "<wix-url>" -o page.html
python -c "
import re, html, io, sys
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8',errors='replace')
s=open('page.html',encoding='utf-8',errors='replace').read()
s=re.sub(r'<script.*?</script>','',s,flags=re.S)
s=re.sub(r'<style.*?</style>','',s,flags=re.S)
out=[]
pat=re.compile(r'<div[^>]*wixui-rich-text[^>]*>(.*?)</div>|<img\b[^>]*?>', re.S|re.I)
for m in pat.finditer(s):
    if m.group(1):
        inner=m.group(1)
        inner=re.sub(r'</(h[1-6]|p|li)>','\n',inner,flags=re.I)
        tagm=re.search(r'<(h[1-6]|p|li)\b',inner,re.I)
        tag=tagm.group(1).upper() if tagm else 'TXT'
        t=re.sub(r'<[^>]+>','',inner); t=html.unescape(t)
        t='\n'.join(x.strip() for x in t.split('\n'))
        t=re.sub(r'[​﻿]','',t).strip()
        if t: out.append((tag,t))
    else:
        tag=m.group(0)
        src=re.search(r'src=\"([^\"]+)\"',tag); alt=re.search(r'alt=\"([^\"]*)\"',tag)
        name=(src.group(1) if src else '').split('/')[-1].split('?')[0]
        out.append(('IMG',((alt.group(1) if alt else '')+' || '+name)))
for k,v in out:
    print('['+k+']', v.replace(chr(10),' / '))
"
```

This gives headings, paragraphs, list items, and image positions in exact page
order — including which alt text/filename went with which image, so you can
match Wix images to the user's locally uploaded files even when filenames
don't match exactly (Wix re-hashes uploaded filenames; local files usually
keep the original name minus `_edited` suffixes).

## 2. Inventory and view the local images

```bash
ls -la src/assets/<ProjectName>/
python -c "
import struct,glob,os
for f in sorted(glob.glob('src/assets/<ProjectName>/*.png')):
    d=open(f,'rb').read(33); w,h=struct.unpack('>II', d[16:24])
    print(f'{os.path.basename(f):40} {w}x{h}  ratio {w/h:.2f}')
"
```

**View every image with `Read`** before deciding placement — filenames alone
(`image.png`, `Screenshot 2025-03-22...`) are not enough to know what a CAD
render or FEA plot actually shows. Rename ambiguous filenames (bare
`image.png`, generic `Screenshot *.png`) to something descriptive once you
know their content, matching the sibling naming convention already in the
folder.

**Check EXIF orientation on every `.jpg`/`.jpeg` phone photo** — this has
caused a real, silent bug before:

```bash
python -c "
import struct
def exif_orient(p):
    d=open(p,'rb').read(200000)
    i=d.find(b'Exif\x00\x00')
    if i<0: return None
    t=d[i+6:]; bo='>' if t[:2]==b'MM' else '<'
    off=struct.unpack(bo+'I',t[4:8])[0]
    n=struct.unpack(bo+'H',t[off:off+2])[0]
    for k in range(n):
        e=off+2+k*12
        if struct.unpack(bo+'H',t[e:e+2])[0]==0x0112:
            return struct.unpack(bo+'H',t[e+8:e+10])[0]
    return None
print(exif_orient('<path>'))
"
```

Astro strips EXIF when re-encoding to WebP at build time. An orientation of
`6` or `8` means the built image will render **sideways** with no build error
— it only shows up by actually looking at a generated file in `dist/`. If any
photo has non-1 orientation, bake the rotation into the pixels before Astro
ever touches it:

```js
// run from the project root so `sharp` resolves (it's an Astro dependency)
import sharp from 'sharp';
await sharp(src).rotate().jpeg({ quality: 92, mozjpeg: true }).toFile(tmp);
// then rename tmp -> src (avoids a same-file read/write conflict on Windows)
```

This also changes the aspect ratio (landscape ↔ portrait), which affects
`Figures` `height` values chosen in step 4 — do this *before* picking heights.

## 3. Draft the narrative

Map Wix's structure onto Hybrid Spindle Liner's section shape — `Overview`,
`Analysis`/`Approach`, `Outcome`/`Manufacturing`/`Drawings` — but **don't force
subheadings that don't fit**. Wix pages so far have been objectives-driven
(a repeater of "objective title + one sentence" cards) rather than
problem→concept narratives; that structure is worth preserving in an
`### Design Objectives` subsection rather than dissolving into prose.

Clean up grammar as you go — these are casual, unedited Wix drafts. Common
issues seen so far: missing subjects on sentences ("faced an issue" → "we
faced" / rewrite), typos (`permittable`, `occuring`, `intial`), inconsistent
hyphenation (`off the shelf` → `off-the-shelf`), and run-on sentences that
read better split. Preserve every technical fact and number exactly — only
the connecting prose gets smoothed. Keep quotes typographically correct:
inch marks are `″` (U+2033), not a curly closing quote — MDX's default quote
handling will mangle a literal `"` inside text.

## 4. Write the MDX

Frontmatter fields, matching the existing schema in `src/content.config.ts`:
`title`, `order`, `summary`, `tags`, `coverImage`, `coverAlt`, optionally
`coverPosition` (only if the cover's natural crop needs nudging against the
card's 16:10 frame).

**Choosing `order`:** run `grep -H '^order:\|^title:' src/content/projects/*`
first. Real projects lead (lowest numbers); the fabricated placeholder
projects (`project-2.md` etc., explicitly marked non-real in `PRODUCT.md`)
trail behind. Insert the new project at the position the user implies (ask if
ambiguous), then **renumber every file that shifts** — no two files should
share an `order` value.

**Figures usage:**
- Default: `<Figures height={N} caption="..." items={[...]} />` — sizes by
  height, lets width follow naturally, wraps if the row doesn't fit.
- `wide` prop breaks past the prose column at `lg`/`xl` — use for busy rows
  or large single images. Breakout width is ~912px at `lg`, ~1040px at `xl`;
  **do the arithmetic** (sum of each image's rendered width at the target
  height, plus gaps) before trusting a `wide` row not to wrap unexpectedly.
- `columns={N}` forces guaranteed equal-width columns instead of height-based
  sizing — use when items must stay side by side regardless of viewport
  (e.g. two engineering drawings the user doesn't need legible), never wraps.
- `FigureSplit` is for one dominant lead image beside a 2×2 cluster of
  supporting shots (used for the Clamping page's FEA setup row).
- Multi-line captions: pass a template literal with a real newline
  (`` caption={`Line one\nLine two`} ``) or `\n` in a quoted string — both are
  split into explicit `<br>`s by `src/utils/caption.ts`. Plain single-line
  captions need nothing special.

**Tailwind v4 gotcha:** opacity modifiers use a percentage integer, not a
decimal — `bg-signal/8` (8%), not `bg-signal/[0.07]`. The bracket-decimal form
silently fails to generate any CSS at all, with no build error.

**Astro/JSX whitespace gotcha:** a newline between text and a `{expression}`
or after a self-closing tag like `<br />` is stripped, not collapsed to a
space. Any spot where inline text sits next to a JSX expression on adjacent
lines needs an explicit `{' '}`.

## 5. Verify

```bash
rm -rf .astro && npx astro sync
npm run build 2>&1 | grep -Ei "error|Complete!|page\(s\)"
npx astro check 2>&1 | grep -E "^- "
```

Then dump the rendered page's heading/paragraph/image/caption structure to
confirm content survived and images landed in the right places — see any
prior migration's conversation for the extraction one-liner (search dist
HTML for `<h2`, `<h3`, `<p`, `<img`, `<figcaption`, strip tags, print in
order). Compare against the Wix extraction from step 1.

**If the projects page/homepage shows an empty state or stale content that
contradicts what you just built:** this is very likely dev-server staleness,
not a real bug. Check for orphaned processes before doubting the code:

```bash
netstat -ano | grep -E "LISTENING.*:432[0-9]"   # ports actually bound
npx astro dev status                             # what Astro *thinks* is running
```

If a port is listening but `astro dev status` shows nothing, an orphaned
process from an earlier session is silently serving stale content — kill it
by PID, `rm -rf .astro`, `npx astro sync`, then `astro dev --background`
fresh. A `npm run build` is never affected by this; it's purely a dev-server
symptom.

## 6. Report back

Flag, don't silently resolve: any spec/material discrepancy between the Wix
text and what a drawing's title block actually says, any Wix image with no
matching local file, and any grammar fix substantial enough the user might
want to review the wording. Don't commit unless asked.

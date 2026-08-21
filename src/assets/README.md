# Where your files go

## Project images → this folder (`src/assets/`)

Drop them here with any filename you like: `clamping-coupler.jpg`,
`vex-drivetrain.png`, whatever.

**Use full-resolution originals.** Astro's image pipeline resizes them, compresses
them, and emits modern formats (WebP/AVIF) at build time. Pre-shrinking them just
throws away quality you can't get back.

> Do **not** put project images in `public/`. Files there are copied verbatim and
> skip optimization entirely.

## Reference them from markdown

In `src/content/projects/<your-file>.md`:

```yaml
coverImage: ../../assets/clamping-coupler.jpg
```

The `../../` prefix is **required** — the path is resolved relative to the markdown
file, not the project root. `src/assets/clamping-coupler.jpg` will fail the build.

## Adding a project — the whole workflow

1. Drop the image here in `src/assets/`.
2. Copy `src/content/projects/_template.md` to a new file in that folder.
   The filename becomes the URL: `clamping-shaft-coupler.md` → `/projects/clamping-shaft-coupler`
3. Fill in the frontmatter and write the body.

That's it. No code to edit, nothing to register. The homepage grid, the archive
page at `/projects`, the detail page, and the prev/next links all read from the
collection, so the new project appears everywhere automatically — sorted into place
by its `date`.

### Frontmatter fields

| Field | Required | Notes |
|---|---|---|
| `title` | yes | |
| `date` | yes | Controls sort order (newest first) |
| `summary` | yes | Card text, clamped to two lines |
| `coverImage` | yes | `../../assets/...` |
| `tags` | no | First 4 render, the rest collapse to `+N` |
| `coverAlt` | no | Alt text — worth writing |
| `featured` | no | `true` pins it to the homepage's first 6 |

If you get a field wrong, `npm run build` fails and names the file and the field.

## Other files

- **Resume PDF → `public/resume.pdf`.** This one *does* belong in `public/` —
  it's linked directly, not optimized. The header and hero already point at it.
- **Favicon → `public/`** (already there).

## Cleaning up the placeholders

Once your real content is in, delete:

- `src/assets/placeholder-1.jpg` … `placeholder-4.jpg`
- `src/content/projects/project-1.md` … `project-4.md`

Nothing else references them. **Keep `_template.md`.**

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** recruiters, university-relations staff, and hiring engineers screening
candidates for **mechanical engineering internships and co-ops**. They arrive from a
resume link, LinkedIn, or an application form, often on a phone, with little time and
several other candidates open. They are deciding whether to advance one person.

**Secondary:** James Oh, who authors and maintains every page himself in markdown/MDX.
Ease of adding a project is a real product requirement, not a convenience.

## Product Purpose

A personal engineering portfolio that gets James Oh — an Engineering Physics student at
the University of British Columbia specializing in mechanical engineering — interviewed
for mechanical engineering internships.

Success is a recruiter reading at least one project case study in enough depth to judge
engineering ability, then making contact. The primary action is reading a case study;
the secondary is getting in touch.

## Positioning

Most student portfolios show coursework and personal builds. This one leads with
**real industrial engineering delivered in a professional setting** — a shipped
prototype at Dometic Marine with a measured outcome, supplier procurement run
end to end, released manufacturing drawings, and a patent recommendation from a
branch general manager.

The second differentiator is the **Engineering Physics program itself**: unusual
analytical breadth (mechanics, electronics, software, physics) deliberately pointed at
mechanical design, and evidenced by work that pairs hand calculation and FEA with
machining and fit-up.

## Operating Context

- Recruiters skim before they read. Substance placed below the fold is frequently
  never seen.
- Significant mobile traffic; project pages carry heavy media and must hold up on a
  phone.
- Content is authored as markdown/MDX files by James. Adding a project must stay a
  two-step operation — drop an image in `src/assets/`, add a content file — with no
  code changes.
- Projects are technical case studies, not gallery entries: 600–800 words plus
  20+ images, CAD sections, engineering drawings, shop photography, and short
  mechanism videos.

## Capabilities and Constraints

- Astro static site, MDX content collection at `src/content/projects/`, ordered by an
  explicit `order` field. Images optimized through `astro:assets`; video is not, and
  lives in `public/media/`. `ffmpeg` is available locally for transcoding.
- A small in-house component kit carries project bodies: `Figures` (mixed image/video
  rows, height-matched, optional caption) and `KeyFacts` (headline stat strip).
- **No dates anywhere on projects.** A deliberate product decision; ordering is manual.
- **No resume link or download.** Deliberate: recruiters reaching the site already
  have the resume.
- **Deploy target:** Vercel, at `https://james-oh-engineering-portfolio.vercel.app`,
  recorded in `astro.config.mjs` as `site` (it drives canonical URLs, Open Graph tags,
  and the sitemap). No custom domain yet.
- Repository: `github.com/jamesoh0315/James_Oh_Engineering_Portfolio`.

## Brand Commitments

- Name: **James Oh**. Program: **Engineering Physics**, University of British Columbia.
  Focus: **Mechanical Engineering**. Contact: `jamesoh1@student.ubc.ca`,
  `linkedin.com/in/jamesoh0315`.
- Currently seeking **Spring / Summer 2027 internships**.
- Voice is plain and technical, written first person, without greeting copy
  ("Hi, I'm…"). Claims stay hedged where evidence is projected rather than measured.
- The site sells no services: no offerings, testimonials, client logos, or pricing.
- **Binding visual reference:** `design/BRIEF.md`, extracted from a nine-image
  reference library the user assembled and annotated (`design/references/`). Its
  guardrails come from the user's own recorded reactions, not from inference. Treat it
  as the pinned brief for any visual world.

## Evidence on Hand

**Complete and real:**

- **Hybrid Spindle Liner** — a four-month internship project at **Dometic Marine,
  Richmond BC**. Full case study: problem, three evaluated concepts with recorded
  reasons for rejection, 3D-printed iterations, machine measurement, supplier
  procurement with J.F. Berns, a custom install tool, fit testing, and released part
  drawings. Quantified outcome: changeover time from **over 30 minutes to under 5**
  (projected, not measured — the hedge is deliberate). A branch GM recommended the
  design be filed for a patent. **Cleared by James for public publication with no
  restrictions.**
- **Overview deck** — 12 slides plus PDF, a fast-track skim path at `/overview`.
- **Photography** — a full-body studio portrait. There is **no tight studio headshot**;
  layouts must not assume one.

**Not yet real — must not be presented as if it were:**

- Four placeholder project files (`project-1.md` … `project-4.md`) with invented
  content, written as scaffolding. They currently render live.
- Around nine candidate real projects exist to draw from, including the clamping shaft
  coupler, VEX robotics drivetrain, shaft spline adapter, carrier bearing tab, and the
  APSC 101 autonomous claw.

**Planned scope:** a curated **four to six** projects, each a full case study; all nine
only if time allows. Depth is preferred over count.

## Product Principles

1. **The work is the product.** The person is context. Design and copy decisions serve
   getting a recruiter into an engineering case study, not showcasing a personality.
2. **Lead with the outcome.** Skimmers must reach the result — what changed, by how
   much — before deciding whether to scroll.
3. **Only real evidence.** No invented metrics, testimonials, or generated imagery. The
   CAD, drawings, and shop photography are the proof, and their credibility is the
   asset.
4. **Show the reasoning, including rejected paths.** Recorded design decisions and
   their failure modes demonstrate judgment more convincingly than finished renders.
5. **Adding a project stays trivial.** Any structure that makes publishing new work
   harder will result in less work being published.

## Accessibility & Inclusion

No product-specific standard has been established. Existing practice to preserve:
descriptive alt text on every image, captions on figure groups, honored
`prefers-reduced-motion`, visible focus states, and a skip link.

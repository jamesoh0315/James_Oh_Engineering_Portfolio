import { existsSync } from 'node:fs';
import path from 'node:path';

/**
 * The Overview deck.
 *
 * The deck is served as a plain PDF rather than a rendered page: the "In a
 * hurry?" banner links straight at the file. Nothing on the site renders the
 * slides themselves, so exporting slide images is no longer part of the flow —
 * the PDF is the whole deliverable.
 */
export const OVERVIEW_PDF = '/overview.pdf';

/**
 * Whether the deck has actually been exported yet.
 *
 * Gating the banner on this means it can never link to a 404 — drop the file at
 * public/overview.pdf and the banner appears on the next build.
 *
 * Resolve from process.cwd() (the project root during `astro build`), NOT from
 * import.meta.url — pages run from a compiled chunk, so a source-relative path
 * silently misses and the banner never appears.
 */
export function hasOverviewPdf(): boolean {
	return existsSync(path.join(process.cwd(), 'public', 'overview.pdf'));
}

/**
 * Splits a caption into its rendered lines.
 *
 * Captions are plain strings, so a newline in one collapses to a space like any
 * other whitespace in HTML. This turns an authored break into an explicit line.
 *
 * Both spellings work, because MDX treats them differently and the difference is
 * easy to trip over:
 *
 *   caption={"Top row: ...\nBottom row: ..."}   real newline, via an expression
 *   caption="Top row: ...\nBottom row: ..."     literal backslash-n, via an attribute
 *
 * A quoted MDX attribute never processes escapes, so the second form would
 * otherwise print a visible "\n". Accepting both means the caption breaks where
 * it looks like it should, whichever way it was written.
 */
export function captionLines(caption: string): string[] {
	return caption.split(/\n|\r?\n/);
}

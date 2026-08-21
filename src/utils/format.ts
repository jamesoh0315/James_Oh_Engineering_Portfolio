/**
 * Frontmatter dates parse as UTC midnight, so format in UTC too — otherwise a
 * negative local offset rolls "2026-03-01" back to February.
 */
const monthYear = new Intl.DateTimeFormat('en-US', {
	month: 'short',
	year: 'numeric',
	timeZone: 'UTC',
});

const fullDate = new Intl.DateTimeFormat('en-US', {
	month: 'long',
	day: 'numeric',
	year: 'numeric',
	timeZone: 'UTC',
});

export function formatDate(date: Date): string {
	return monthYear.format(date);
}

export function formatDateLong(date: Date): string {
	return fullDate.format(date);
}

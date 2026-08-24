/**
 * Overview deck slides.
 *
 * Drop slide images in src/assets/deck/ and they appear on /overview — no code
 * changes, same guarantee the projects collection gives you.
 *
 * Both letter cases are in the glob because PowerPoint on Windows exports .PNG.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/deck/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}',
	{ eager: true },
);

/**
 * Slides in numeric filename order.
 *
 * The `numeric` collator option is load-bearing: PowerPoint exports Slide1.PNG …
 * Slide12.PNG, and a plain string sort would order those 1, 10, 11, 12, 2, 3 …
 */
export function getDeckSlides(): ImageMetadata[] {
	return Object.entries(modules)
		.sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
		.map(([, mod]) => mod.default);
}

export function hasDeck(): boolean {
	return Object.keys(modules).length > 0;
}

/// <reference types="astro/client" />

/**
 * Astro's built-in image module declarations only cover lowercase extensions
 * (*.jpg, *.png, ...). TypeScript's wildcard module matching is case-sensitive,
 * so a phone photo saved as ChuckTest.JPG has no matching declaration even
 * though Vite resolves and bundles it correctly at build time. These mirror
 * Astro's own declarations for the uppercase variants actually in use.
 */
declare module '*.JPG' {
	const metadata: ImageMetadata;
	export default metadata;
}

declare module '*.JPEG' {
	const metadata: ImageMetadata;
	export default metadata;
}

declare module '*.PNG' {
	const metadata: ImageMetadata;
	export default metadata;
}

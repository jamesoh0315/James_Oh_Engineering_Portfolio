/**
 * Site-wide constants. Edit your contact details and nav in one place.
 */
export const SITE = {
	name: 'James Oh',
	role: 'Engineering Physics',
	roleUrl: 'https://engineering.ubc.ca/programs/undergraduate/engineering-physics',
	school: 'University of British Columbia',
	schoolUrl: 'https://www.ubc.ca/about/',
	focus: 'Mechanical Engineering',
	description:
		'Engineering Physics student at UBC specializing in mechanical design — CAD, analysis, and fabrication. Seeking mechanical engineering internships.',
	email: 'jamesoh1@student.ubc.ca',
	linkedin: 'https://www.linkedin.com/in/jamesoh0315',
} as const;

export const NAV = [
	{ href: '/#projects', label: 'Projects' },
	{ href: '/#about', label: 'About' },
	{ href: '/#contact', label: 'Contact' },
] as const;

/** Shown as mono chips in the About section. */
export const SKILLS = [
	'SolidWorks',
	'Onshape',
	'GD&T',
	'FEA',
	'Machining',
	'3D Printing',
	'Sheet Metal',
	'DFM',
	'MATLAB',
	'Python',
	'Arduino',
	'Technical Drawing',
] as const;

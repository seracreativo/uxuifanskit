/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				surface: 'var(--surface)',
				input: 'var(--input)',
				border: 'var(--border)',
				placeholder: 'var(--placeholder)',
				body: 'var(--body)',
				title: 'var(--title)',
				foreground: 'var(--foreground)',
				accent: 'var(--accent)',
			},
		},
	},
	plugins: [],
};

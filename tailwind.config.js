/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#ffffff',
				surface: '#f8f9fa',
				input: '#f1f3f4',
				border: '#e1e5e9',
				placeholder: '#6c757d',
				body: '#212529',
				title: '#000000',
				foreground: '#000000',
				accent: '#007bff',
			},
		},
	},
	plugins: [],
};

module.exports = {
	purge: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('tailwindcss'),
		require('precss'),
		require('autoprefixer')
	]
};

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				arcade: ['arcade'],
				ferrum: ['ferrum'],
				// trochut: ['Trochut', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

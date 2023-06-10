module.exports = {
	content: ['./*.html', './node_modules/flowbite/**/*.js'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
			'2xl': { max: '1535px' },
		},
		extend: {
			colors: {
				darkBlue: '#2B3F69',
			},
		},
	},
	daisyui: {
		themes: ['light'],
	},
	plugins: [require('daisyui'), require('flowbite/plugin')],
};

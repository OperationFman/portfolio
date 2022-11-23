/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"/src/**/*.{js,ts,jsx,tsx}",
		"/utils/**/*.{js,ts,jsx,tsx}",
		"/themes/**/*.{js,ts,jsx,tsx",
		"/public/**/*.{js,ts,jsx,tsx",
	],
	theme: {
		extend: {},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};

const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
		join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
		join(__dirname, "./utils/**/*.{js,ts,jsx,tsx}"),
		join(__dirname, "./themes/**/*.{js,ts,jsx,tsx"),
		join(__dirname, "./public/**/*.{js,ts,jsx,tsx"),
	],
	theme: {
		extend: {},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};

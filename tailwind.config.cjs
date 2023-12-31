/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			screen: {
				"max-lg": { max: "1023px" },
				"max-md": { max: "765px" },
				"max-sm": { max: "400px" },
			},
		},
	},
	plugins: [require("tailwind-hamburgers")],
};

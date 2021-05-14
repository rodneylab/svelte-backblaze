/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// amp: true,
		floc: false,
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;

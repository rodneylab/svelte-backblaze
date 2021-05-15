/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify';
// import sveltePreprocess from 'svelte-preprocess';

// const preprocess = sveltePreprocess({
// 	preserve: ['ld+json']
// });

const config = {
	kit: {
		adapter: adapter(),
		// amp: true,
		floc: false,
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
	// preprocess
};

export default config;

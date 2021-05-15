<script>
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	import Twitter from './Twitter.svelte';
	import website from '$lib/config/website.js';
	import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities.js';
	export let title;
	export let metadescription;
	const { author, ogLanguage, siteTitle } = website;
	const siteUrl = import.meta.env.VITE_SITE_URL;
	const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
	// const image = {
	// 	url: '/my-image.jpg',
	// 	width: 300,
	// 	height: 200,
	// 	alt: 'Image alt'
	// };
	const openGraphProps = {
		facebookAppId: import.meta.env.VITE_FACEBOOK_APP_ID,
		// image,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		siteUrl
	};
	const twitterProps = {
		author,
		twitterUsername: import.meta.env.VITE_TWITTER_USERNAME,
		// image,
		metadescription,
		pageTitle,
		siteUrl
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang="en-GB" />
	<SchemaOrg />
	<OpenGraph {...openGraphProps} />
	<Twitter {...twitterProps} />
</svelte:head>

<script>
	export let article = false;
	export let author;
	export let twitterUsername;
	export let image;
	export let metadescription;
	export let pageTitle;
	export let siteUrl;
	export let timeToRead = 0;
</script>

<svelte:head>
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={pageTitle} />
	<meta property="twitter:description" content={metadescription} />
	<meta property="twitter:image" content={metadescription} />
	{#if image}
		<meta property="twitter:image" content={`${siteUrl}${image.url}`} />
		<meta property="og:image:alt" content={image.alt} />
	{/if}
	{#if twitterUsername}
		<meta name="twitter:creator" content={`@${twitterUsername}`} />
		<meta name="twitter:site" content={`@${twitterUsername}`} />
	{/if}
	<meta name="twitter:label1" content="Written by" />
	<meta name="twitter:data1" content={author} />
	{#if article && timeToRead > 0}
		<meta name="twitter:label2" content="Est. reading time" />
		<meta name="twitter:data2" content={timeToRead !== 1 ? `${timeToRead} minutes` : '1 minute'} />
	{/if}
</svelte:head>

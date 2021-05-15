<script>
	export let article = false;
	export let datePublished;
	export let dateModified;
	export let facebookAppId;
	export let facebookAuthorPage;
	export let facebookPage;
	export let image;
	export let metadescription;
	export let ogLanguage;
	export let pageTitle;
	export let siteTitle;
	export let siteUrl;
</script>

<svelte:head>
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={ogLanguage} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:type" content={article ? 'article' : 'website'} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metadescription} />
	{#if image}
		<meta property="og:image" content={`${siteUrl}${image.url}`} />
		<meta property="og:image:width" content={image.width} />
		<meta property="og:image:height" content={image.height} />
		<meta property="og:image:alt" content={image.alt} />
	{/if}
	<meta property="fb:app_id" content={facebookAppId} />
	{#if article}
		<meta property="article:publisher" content={facebookPage} />
		<meta property="article:author" content={facebookAuthorPage} />
		<meta property="article:published_time" content={datePublished} />
		<meta property="article:modified_time" content={dateModified} />
	{/if}
</svelte:head>

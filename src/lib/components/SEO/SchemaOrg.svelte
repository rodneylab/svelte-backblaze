<script>
	const schemaOrgWebsite = {
		'@type': 'WebSite',
		'@id': `${import.meta.env.VITE_SITE_URL}/#website`
	};
	const schemaOrgArray = [schemaOrgWebsite];
	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray
	};
	let jsonString = JSON.stringify(schemaOrgObject);
</script>

<svelte:head>
	<script type="application/ld+json">
		{
			jsonString;
		}
	</script>
</svelte:head>

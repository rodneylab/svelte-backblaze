<script>
	let count = 0;

	async function handleClick() {
		count += 1;

		const options = {
			method: 'POST',
			body: JSON.stringify({ greeting: 'hello' })
		};
		const response = await fetch('/.netlify/functions/backblaze', options);
		console.log('response ', response);
		console.log('json: ', await response.json());
	}
	let data;
	let files = [];
	$: {
		if (files && files[0]) {
			let binaryFile = files[0];
			let reader = new FileReader();
			reader.onload = function (event) {
				data = new Uint8Array(event.target.result);
			};
			reader.readAsArrayBuffer(binaryFile);
		}
	}
</script>

<svelte:head>
	<title>svelte-backblaze</title>
	<meta
		name="description"
		content="svelte-backblaze: app for testing svelte-kit with backblaze and netlify functions"
	/>
</svelte:head>
<h1>svelte-backblaze</h1>
<!-- <label>
	<input bind:files type="file" />
</label>
<form method="post" enctype="multipart/form-data">
	<label>
		<input type="file" />
	</label>
</form> -->
<span>
	<button on:click={handleClick}>
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>
</span>

<style>
	button {
		padding: 1em;
		font-size: 1em;
	}
</style>

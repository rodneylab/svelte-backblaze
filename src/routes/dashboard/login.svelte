<script>
	let submitting = false;
	let email;
	let password;
	const handleSubmit = () => {
		console.log('email: ', email);
	};
</script>

<svelte:head>
	<title>svelte-backblaze</title>
	<meta
		name="description"
		content="log in to svelte-backblaze: app for testing svelte-kit with backblaze and netlify functions"
	/>
</svelte:head>

<h1>svelte-backblaze: login</h1>

<form on:submit|preventDefault={handleSubmit}>
	<label for="login-email" class="screen-reader-text">Email:</label>
	<input id="login-email" name="email" bind:value={email} type="text" placeholder="email" />
	<label for="login-password" class="screen-reader-text">Password:</label>
	<input
		id="login-password"
		name="password"
		bind:value={password}
		type="password"
		placeholder="p@ssW0rd"
	/>
	<button disabled={submitting} type="submit">Log in</button>
</form>

<style>
  .screen-reader-text {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    width: 1px;
    overflow: hidden;
    position: absolute !important;
    word-wrap: normal !important;
  }
</style>
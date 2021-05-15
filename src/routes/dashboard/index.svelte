<script>
	import { onMount, onDestroy } from 'svelte';
	import auth from '$lib/utilities/auth/auth-service.js';
	import { isAuthenticated, user } from '$lib/utilities/auth/store.js';

	let auth0Client;
	let unsubscribe;
	let is_authenticated_value;

	onMount(async () => {
		unsubscribe = isAuthenticated.subscribe((value) => {
			is_authenticated_value = value;
		});
		auth0Client = await auth.createClient();

		isAuthenticated.set(await auth0Client.isAuthenticated());
		user.set(await auth0Client.getUser());
	});

	function login() {
		auth.loginWithPopup(auth0Client);
	}

	function logout() {
		auth.logout(auth0Client);
	}
	console.log('isAuth: ', is_authenticated_value);
	console.log('user: ', $user);
	if (unsubscribe) {
		onDestroy(unsubscribe);
	}
</script>

<main>
	<nav>
		<ul>
			{#if $isAuthenticated}
				<li>{$user.name} ({$user.email})}</li>
				<li><a href="/#" on:click={logout}>Log out</a></li>
			{:else}
				<li><a href="/#" on:click={login}>Log in</a></li>
			{/if}
		</ul>
	</nav>
	{#if !$isAuthenticated}
		<h1>Dashboard - Console</h1>
		<p><a href="/#" role="button" on:click={login}>Login</a> to start &#128272;</p>
	{:else}
		<p>This is the secret sauce recipe:</p>
	{/if}
</main>

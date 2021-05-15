<script>
	import environmentVariables from '$lib/constants/environmentVariables';
	import { COPYRIGHT_ENTITY } from '$lib/constants/entities.js';
	const { facebookPage, githubPage, linkedinProfile, twitterUsername } = environmentVariables;
</script>

<header>
	<nav>
		<a href="/.">Home</a>
		<a href="/contact">Contact</a>
	</nav>
</header>
<main>
	<slot />
</main>
<footer>
	<p>
		Copyright {COPYRIGHT_ENTITY} 2021 Rodney Johnson.
	</p>
	<ul>
		<li>
			<a
				aria-label="Go to the Rodney Lab Facebook page"
				href={`https://www.facebook.com/${facebookPage}`}>f</a
			>
		</li>
		<li>
			<a
				aria-label="Open the Rodney Lab twitter feed"
				href={`https://twitter.com/intent/user?screen_name=${twitterUsername}`}>t</a
			>
		</li>
		<li>
			<a
				aria-label="Open the Rodney Lab LinkedIn page"
				href={`https://uk.linkedin.com/in/${linkedinProfile}`}>l</a
			>
		</li>
		<li>
			<a aria-label="Open the Rodney Lab Git Hub repo" href={`https://github.com/${githubPage}`}
				>g</a
			>
		</li>
	</ul>
	<p>
		A project by
		<a aria-label="Open the Rodney Lab site" href="https://rodneylab.com/" rel="noopener"
			>RODNEY LAB</a
		>.
	</p>
</footer>

<style>
	main {
		min-height: 100vh;
	}
</style>

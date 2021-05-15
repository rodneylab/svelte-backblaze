<header>
	<nav>
		<a href=".">Home</a>
		<a href="contact">Contact</a>
	</nav>
</header>
<main>
	<slot />
</main>
<footer>
	<p>
		Copyright {'\u00A9'} 2021 Rodney Johnson.
	</p>
	<ul>
		<li>
			<a
				aria-label="Go to the Rodney Lab Facebook page"
				href={`https://www.facebook.com/${import.meta.env.VITE_FACEBOOK_PAGE}`}>f</a
			>
		</li>
		<li>
			<a
				aria-label="Open the Rodney Lab twitter feed"
				href={`https://twitter.com/intent/user?screen_name=${
					import.meta.env.VITE_TWITTER_USERNAME
				}`}>t</a
			>
		</li>
		<li>
			<a
				aria-label="Open the Rodney Lab LinkedIn page"
				href={`https://uk.linkedin.com/in/${import.meta.env.VITE_LINKED_PROFILE}`}>l</a
			>
		</li>
		<li>
			<a
				aria-label="Open the Rodney Lab Git Hub repo"
				href={`https://github.com/${import.meta.env.VITE_GITHUB_PAGE}`}>g</a
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

<script>
	const telegramUsername = import.meta.env.VITE_TELEGRAM_USERNAME;
</script>

<h1>Contact</h1>

<ul>
	<li>Email: {import.meta.env.VITE_CONTACT_EMAIL}</li>
	<li>
		Twitter: <a
			href={`https://twitter.com/messages/compose?recipient_id=${
				import.meta.env.VITE_TWITTER_USER_ID
			}`}>{`@${import.meta.env.VITE_TWITTER_USERNAME}`}</a
		>
	</li>
	<li>
		Facebook messenger:
		<a
			aria-label="Message me via Facebook Messenger"
			href={`https://m.me/${import.meta.env.VITE_FACEBOOK_PAGE}`}
			rel="nofollow noreferrer noopener"
			target="_blank"
		>
			{import.meta.env.VITE_FACEBOOK_PAGE}
		</a>
	</li>
	<li>
		Telegram:
		<a
			aria-label="DM me on Telegram"
			href={`https://t.me/${telegramUsername}`}
			rel="nofollow noreferrer noopener"
			target="_blank"
		>
			{telegramUsername}
		</a>
	</li>
	<li>
		Wire: {import.meta.env.VITE_WIRE_USERNAME}
	</li>
	<li>
		Discord:
		<a
			aria-label="Reach out on discord"
			href={`https://discord.gg/${import.meta.env.VITE_DISCORD_USER_ID}`}
			rel="nofollow noreferrer noopener"
			target="_blank"
		>
			{import.meta.env.VITE_DISCORD_USERNAME}
		</a>
	</li>
</ul>

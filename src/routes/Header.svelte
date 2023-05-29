<script>
	import "../styles/index.scss";

	let showMobileMenu = false;
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);
</script>

<header>
	<nav class={`nav${showMobileMenu ? " open-nav" : ""}`}>
			<a href="/" class="mobile-home-link">SOG</a>
			<button class="mobile-icon" on:click={handleMobileIconClick}>
				<span class="left-bar" />
				<span class="right-bar" />
			</button>
		<ul>
			<li><a href="/blog/" on:click={handleMobileIconClick}>Blog</a></li>
			<li><a href="/news/" on:click={handleMobileIconClick}>News</a></li>
			<li class="mid"><a href="/" on:click={handleMobileIconClick}><img src='/sog_logo.png' alt='SubOptimal Gaming Logo' /></a></li>
			<li><a href="/rosters/" on:click={handleMobileIconClick}>Rosters</a></li>
			<li><a href="/merch/" on:click={handleMobileIconClick}>Merch</a></li>
		</ul>
	</nav>
</header>

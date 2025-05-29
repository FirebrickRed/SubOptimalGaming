<script>
	import "../styles/index.scss";
	import Logo from './Logo.svelte';

	let showMobileMenu = false;
	const mobileBreakpoint = 1024;

	const handleMobileIconClick = () => {
		if(window.innerWidth < mobileBreakpoint) {
			showMobileMenu = !showMobileMenu
		}
	};
</script>

<header>
	<nav class={`nav${showMobileMenu ? " open-nav" : ""}`}>
		<a aria-label="Home" href="/" class="mobile-home-link">SOG</a>
		<button class="mobile-icon" on:click={handleMobileIconClick}>
			<span class="left-bar" />
			<span class="right-bar" />
		</button>
		<ul>
			<li><a aria-label="Blog" href="/blog/" on:click={handleMobileIconClick}>Blog</a></li>
			<li><a aria-label="News" href="/news/" on:click={handleMobileIconClick}>News</a></li>
			<li class="mid"><a aria-label="Home" href="/" on:click={handleMobileIconClick}><Logo /></a></li>
			<li><a aria-label="Rosters" href="/rosters/" on:click={handleMobileIconClick}>Rosters</a></li>
			<li><a aria-label="Merch" href="/merch/" on:click={handleMobileIconClick}>Merch</a></li>
		</ul>
	</nav>
</header>

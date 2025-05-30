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

<svelte:head>
	<link rel="preconnect" href="https://fonts.bunny.net">
	<link href="https://fonts.bunny.net/css?family=anybody:100,200,300,400,500,600,700,800,900|audiowide:400&display=swap" rel="stylesheet" />
	<!-- <link href="https://fonts.bunny.net/css?family=anybody:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|audiowide:400&display=swap" rel="stylesheet" /> -->
</svelte:head>

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

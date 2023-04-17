<script>
	import { page } from "$app/stores";
	import "../styles/index.scss";

	import { onMount } from "svelte";
	let showMobileMenu = false;

	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	const mediaQueryHandler = (e) => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	onMount(() => {
		const mediaListener = window.matchMedia("(max-width: 767px)");

		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<header>
	<!-- <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div> -->

	<nav class="nav">
		<button
			class={`mobile-icon${showMobileMenu ? " active" : ""}`}
			on:click={handleMobileIconClick}
			><span class="left-bar" />
			<span class="right-bar" /></button>
		<!-- <button class="nav-toggle" /> -->
		<ul class={`${showMobileMenu ? "active" : ""}`}>
			<li><a href="/about/">about</a></li>
			<li><a href="/news/">news</a></li>
			<li class="mid"><a href="/">Logo</a></li>
			<li><a href="/players/">players</a></li>
			<li><a href="/teams/">teams</a></li>
		</ul>
	</nav>

	<!-- <div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div> -->
</header>

<!-- <style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style> -->

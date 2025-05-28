<script>

	// new Twitch.Embed("twitch-embed", {
	// 	width: 854,
	// 	height: 480,
	// 	channel: "sewerratmatt",
	// 	// Only needed if this page is going to be embedded on other websites
	// 	// parent: ["embed.example.com", "othersite.example.com"]
	// 	parent: []
	// });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<!-- Load the Twitch embed JavaScript file -->
	<script src="https://embed.twitch.tv/embed/v1.js"></script>
</svelte:head>

<div>
	<h1 id="welcome">Welcome to SOG</h1>
	<article class="tournaments-article">
		<h2>Upcoming Tournaments</h2>
		<p>None Schedualed Currently</p>
	</article>
	<article class="live-article">
		<h2>Currently Live</h2>
		<p>No one is currently live :(</p>
		<!-- <div>
			<div id="twitch-embed"></div> -->

			<!-- Create a Twitch.Embed object that will render within the "twitch-embed" element -->
			<!-- <script type="text/javascript">
				new Twitch.Embed("twitch-embed", {
					width: 854,
					height: 480,
					channel: "justandy89",
					// Only needed if this page is going to be embedded on other websites
					// parent: ["embed.example.com", "othersite.example.com"]
					parent: []
				});
			</script> -->
		<!-- </div> -->
	</article>
	<!-- <h2>New Blog Posts</h2> -->
</div>


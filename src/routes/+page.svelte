<script>

	// new Twitch.Embed("twitch-embed", {
	// 	width: 854,
	// 	height: 480,
	// 	channel: "sewerratmatt",
	// 	// Only needed if this page is going to be embedded on other websites
	// 	// parent: ["embed.example.com", "othersite.example.com"]
	// 	parent: []
	// });

    import Trapezoid from "$lib/components/Trapezoid.svelte";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="SubOptimalGaming Esports team website" />
	<!-- Load the Twitch embed JavaScript file -->
	<script src="https://embed.twitch.tv/embed/v1.js"></script>
</svelte:head>

<div>

	<div style="display: flex; justify-content: center; margin: 2rem;">
		<Trapezoid angleTopLeft angleTopRight angleBottomLeft angleBottomRight textAlign="center" backgroundColor="#EBEBEB" borderColor="#A3A3A3" shadow="drop-shadow(0px 0px 2px #EBEBEB)">
			<h1>Welcome to SOG</h1>
		</Trapezoid>
	</div>

	<section class="tournaments-section">
		<Trapezoid angleTopRight backgroundColor="#6D3359" borderColor="#A3A3A3" borderLeft={false} borderBottom={false} inset="5rem" padding=".5rem 6rem .5rem 1rem" >
			<h2>Upcoming Tournaments</h2>
		</Trapezoid>
		<p>None Scheduled Currently</p>
	</section>
	<section class="live-section">
		<Trapezoid angleTopLeft backgroundColor="#6d3359" borderColor="#A3A3A3" borderRight={false} borderBottom={false} inset="5rem" padding=".5rem 1rem .5rem 5rem" style="display: block; margin-left: auto; width: fit-content">
			<h2>Currently Live</h2>
		</Trapezoid>
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
	</section>
	<!-- <h2>New Blog Posts</h2> -->
</div>


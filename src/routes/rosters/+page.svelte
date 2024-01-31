<script>
	export let data;
	const carouselTitles = ['About', 'Game'];
	let carouselIndex = 0;

	data.posts.forEach(post => {
		post.carouselIndex = 0;
	});

	const handleCarousleClick = (post, i) => {
		let newIndex = post.carouselIndex + i;
		if(newIndex >= carouselTitles.length) {
			newIndex = 0;
		} else if (newIndex < 0) {
			newIndex = carouselTitles.length - 1;
		}
		post.carouselIndex = newIndex;

		data.posts = data.posts.map(p => p.path === post.path ? {...p, carouselIndex: newIndex} : p);
	}
	console.log(data);
</script>

<h1>Roster</h1>

<ul>
	{#each data.posts as post}
		<div class="player_block">
			<h2 class="IGN">{post.meta.gamerTag}</h2>
			<div class="player_content">

				{#if post.carouselIndex === 0}
					<div class="about">
						<p>{post.meta.IRL}</p>
						<p>{@html post.meta.about}</p>
						<ul>
							<!-- {#each post.meta.socialMedia as socialMedia}
								<li>
									<a href="{socialMedia.url}">{socialMedia.platform}</a>
								</li>
							{/each} -->
						</ul>
					</div>
				{/if}
	
				{#if post.carouselIndex === 1}
					<div class="games">
						{#if post.meta.recentGame}
							<p>Recent Game: {post.meta.recentGame}</p>
						{/if}
						{#if post.meta.favoriteGames}
						<p>Favorite Games:</p>
							<ol>
								{#each post.meta.favoriteGames as favoriteGame}
									<li>{favoriteGame}</li>
								{/each}
							</ol>
						{/if}
					</div>
				{/if}

				{#if post.carouselIndex === 2}
					<div class="esports">
						<p>{post.meta.esportsTeamAndRole?.esportsTeam}</p>
						<p>{post.meta.esportsTeamAndRole?.teamRoles[0]}</p>
					</div>
				{/if}
				
			</div>
			<div class='carouselControls'>
				<div class='carouselButtons'>
					<button on:click={() => handleCarousleClick(post, -1)}>Left</button>
					<h3>{carouselTitles[post.carouselIndex]}</h3>
					<button on:click={() => handleCarousleClick(post, 1)}>Right</button>
				</div>
			</div>
		</div>
	{/each}
</ul>
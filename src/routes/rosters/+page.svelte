<script>
	/*
		Valorant
		https://splendid-groovy-feverfew.glitch.me/valorant/region/name/tag
	*/
	export let data;
	console.log('data', data);

	export let index = 0;
	export let previousIndex = data.posts.length - 1;
	export let nextIndex = index + 1;
	export let post = data.posts[index];
	const handleCarouselClick = (postToUpdate, direction) => {
		console.log('handleCarouselClick', postToUpdate.gamerTag, direction);
		const updatedPosts = data.posts.map(p => {
			if(p.gamerTag === postToUpdate.gamerTag) {
				let newIndex = p.carousel.index + direction;
				if(newIndex >= p.carousel.indexes.length) {
					newIndex = 0;
				} else if(newIndex < 0) {
					newIndex = p.carousel.indexes.length - 1;
				}

				return {
					...p,
					carousel: {
						...p.carousel,
						index: newIndex
					}
				};
			}
			return p;
		});

		data.posts = updatedPosts;
		post = updatedPosts[index];
	}

	const handlePlayerCarouselClick = (direction) => {
		console.log('handlePlayerCarouselClick', direction, index);
		index += direction;
		if (index < 0) {
			index = data.posts.length - 1;
			previousIndex = index - 1;
			nextIndex = 0;
		} else if (index >= data.posts.length) {
			index = 0;
			previousIndex = data.posts.length - 1;
			nextIndex = index + 1;
		} else {
			if (index === 0) {
				previousIndex = data.posts.length - 1;
				nextIndex = index + 1;
			} else if (index === (data.posts.length - 1)) {
				previousIndex = index - 1;
				nextIndex = 0;
			} else {
				previousIndex = index - 1;
				nextIndex = index + 1;
			}
		}
		post = data.posts[index];
	}
</script>

<h1>Roster</h1>

<ul>
	<!--{#each data.posts as post}-->
	<div class="player_block">
		<h2 class="IGN">{post.gamerTag}</h2>
		<div class="player_content">

			{#if post.carousel.indexes[post.carousel.index] === 'About'}
				<div class="about">
					<p>{post.aboutInfo.irl}</p>
					<ol>
						{#if post.aboutInfo.socialMedia}
							{#each post.aboutInfo.socialMedia as socials}
								<li><a target='blank' href={socials.socialMedia.url}>{socials.socialMedia.platform}</a></li>
							{/each}
						{/if}
					</ol>
					{#if post.aboutInfo.about}
						<p>{@html post.aboutInfo.about}</p>
					{:else}
						<p>I'm too suboptimal to currently have an about section, and yes please yell at me to fill this out.</p>
					{/if}
					<!-- {#if post.aboutInfo.clips}
                        <div class='video-clips'>
                            <p>Clips:</p>
                            {#each post.aboutInfo.clips as clip}
                                <iframe src={clip.file} frameborder="0" allowfullscreen="true"></iframe>
                            {/each}
                        </div>
                    {/if} -->
				</div>
			{/if}

			{#if post.carousel.indexes[post.carousel.index] === 'Game'}
				<div class="games">
					{#if post.favoriteGames.length > 0}
						<p>Favorite Games:</p>
						<ol>
							{#each post.favoriteGames as favoriteGame}
								<div class="favoriteGamed">
									<img src="{favoriteGame.imageUrl}" width="150" height="175" alt="box cover" class="img-box">
									<a href="{favoriteGame.url}">{favoriteGame.title}</a>
								</div>
							{/each}
						</ol>
					{/if}
					<p>Recent Steam Games:</p>
					{#each post.steamGameInfo as steamGame}
						<p>{steamGame.gameName}</p>
					{/each}
				</div>
			{/if}

			{#if post.carousel.indexes[post.carousel.index] === 'LOL'}
				<div class="lol">
					<p>League of Legend Stats:</p>
					{#if post.leagueInfo.lolRank.tier}
						<p>{post.leagueInfo.lolRank.queueType}: {post.leagueInfo.lolRank.tier} {post.leagueInfo.lolRank.rank}</p>
					{/if}
					{#each post.leagueInfo.tftRank as tftRank}
						{#if tftRank.tier}
							<p>{tftRank.queueType}: {tftRank.tier} {tftRank.rank}</p>
						{/if}
					{/each}
				</div>
			{/if}

			{#if post.carousel.indexes[post.carousel.index] === 'Business'}
				<div class='orgInfo'>
					<span>Role: {post.orgInfo.roleInOrg}</span>
					{#if post.orgInfo.achievements?.length > 0}
						<p>Achievements:</p>
						{#each post.orgInfo.achievements as achievement}
							<p>{achievement}</p>
						{/each}
					{/if}
				</div>
				{#if post.esports.esportsTeam}
					<div class="esports">
						<p>{post.esports.esportsTeam}</p>
						<p>{post.esports.teamRoles[0]}</p>
					</div>
				{/if}
			{/if}

		</div>
		<div class='carouselControls'>
			<div class='carouselButtons'>
				<button on:click={() => handleCarouselClick(post, -1)}>Left</button>
				<h3>{post.carousel.indexes[post.carousel.index]}</h3>
				<button on:click={() => handleCarouselClick(post, 1)}>Right</button>
			</div>
		</div>
	</div>
	<!--{/each}-->
</ul>

<div class='playerCarouselButtons'>
	<div class='carouselButtons'>
		<button class='leftPlayerCarouselButton' on:click={() => handlePlayerCarouselClick(-1)}><h2>{data.posts[previousIndex].gamerTag}</h2></button>
		<button class='rightPlayerCarouselButton' on:click={() => handlePlayerCarouselClick(1)}><h2>{data.posts[nextIndex].gamerTag}</h2></button>
	</div>
</div>

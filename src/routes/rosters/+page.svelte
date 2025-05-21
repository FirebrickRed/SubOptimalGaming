<script>
	import Chevron from '$lib/images/Chevron.svelte';
	/*
		Valorant
		https://splendid-groovy-feverfew.glitch.me/valorant/region/name/tag
	*/
	export let data;
	console.log('data', data);

	const handleCarousleClick = (post, direction) => {
		const updatedPosts = data.posts.map(p => {
			if(p.gamerTag === post.gamerTag) {
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
	}
</script>

<h1>Roster</h1>

<ul>
	{#each data.posts as post}
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
								<li>{favoriteGame}</li>
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
						<p>Role in Org:</p>
						{#each post.orgInfo?.roleInOrg as role}
							<p>{role}</p>
						{/each}
						{#if post.orgInfo.achievements?.length > 0}
							<p>Achievements:</p>
							{#each post.orgInfo.achievements as achievement}
								<p>{achievement}</p>
							{/each}
						{/if}
					</div>
					{#if post.esports.esportsTeam}
						<div class="esports">
							<p>Team:</p>
							<p>{post.esports.esportsTeam}: {post.esports.teamRoles[0]}</p>
						</div>
					{/if}
				{/if}
				
			</div>
			<div class='carouselControls'>
				<div class='carouselButtons'>
					<button class='leftChevron' on:click={() => handleCarousleClick(post, -1)}><Chevron /></button>
					<h3>{post.carousel.indexes[post.carousel.index]}</h3>
					<button class='rightChevron' on:click={() => handleCarousleClick(post, 1)}><Chevron /></button>
				</div>
			</div>
		</div>
	{/each}
</ul>
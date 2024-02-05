<script>
	import { onMount } from 'svelte';

	/*
		A lot of this can probably be moved to the api folder eventually

		Valorant
		https://splendid-groovy-feverfew.glitch.me/valorant/region/name/tag

		Automagically getting ranks with riot
		TFT Ranked:
			WebPage: https://developer.riotgames.com/apis#tft-league-v1
			request url: https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/mhK-cDvDwz7vKBE_dGqK5evNCJD9DKO9A7QyZqDyWKO-yf0
			needs: encryptedSummonerId
		
		to get summonerId:
			WebPage: https://developer.riotgames.com/apis#tft-summoner-v1/GET_getBySummonerName
			request url: https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/Dreemie
			needs: SummonerName
	*/
	export let data;
	const carouselTitles = ['About', 'Game', 'eSports'];

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

	// get summoner id from data if applicable
	let summonerId = '1CAlBu90eF6L6oELxWolIVgDnwTPoftI3sqUQlCibqsjH4Q'; 
  let rankInfo = null;
  let error = null;

	async function fetchPlayerRank() {
    try {
      const response = await fetch(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=RGAPI-2ba989f7-82bc-4f5c-b709-8a2e809daf55`);
      if (!response.ok) throw new Error('Failed to fetch rank info');
			console.log(response)
      rankInfo = await response.json();
			console.log(rankInfo)
    } catch (err) {
      error = err.message;
    }
  }
	onMount(fetchPlayerRank);
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
						<ol>
							{#if post.meta.socialMedia}
								{#each post.meta.socialMedia as socials}
									<li><a target='blank' href={socials.socialMedia.url}>{socials.socialMedia.platform}</a></li>
								{/each}
							{/if}
						</ol>
						<p>{@html post.meta.about}</p>
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
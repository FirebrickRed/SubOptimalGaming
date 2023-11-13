<script>
export let data;
console.log(data)
</script>

<h1>Roster</h1>

<ul>
	{#each data.posts as post}
		<div class="player_block">
			<h2 class="IGN">{post.meta.gamerTag}</h2>
			<div class="player_content">
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
				<div class="esports">
					<p>{post.meta.esportsTeamAndRole?.esportsTeam}</p>
					<p>{post.meta.esportsTeamAndRole?.teamRoles[0]}</p>
				</div>
				<div class="games">
					
				</div>
			</div>
		</div>
	{/each}
</ul>
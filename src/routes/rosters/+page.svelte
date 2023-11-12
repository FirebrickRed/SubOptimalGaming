<script>
export let data;
console.log(data)
</script>

<h1>Roster</h1>

<ul>
	{#each data.posts as post}
		<div class="player_block">
			<h2 class="IGN">{post.meta.gamerTag}</h2>
			<!-- <p>{post.meta.IRL}</p> -->
		</div>
	{/each}
</ul>
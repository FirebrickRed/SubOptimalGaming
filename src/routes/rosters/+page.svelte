<script>
export let data;
console.log(data)
</script>

<h1>Roster</h1>

<ul>
	{#each data.posts as post}
		<li>
			<p>{post.meta.gamerTag}</p>
			<p>{post.meta.IRL}</p>
		</li>
	{/each}
</ul>
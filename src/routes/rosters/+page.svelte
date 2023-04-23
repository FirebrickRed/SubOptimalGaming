<script>
export let data;
console.log(data)
</script>

<h1>Roster</h1>

<ul>
	{#each data.posts as post}
		<li>
			<p>Gamertag: {post.meta.gamerTag}</p>
			<p>IRL: {post.meta.IRL}</p>
			<!-- <h2>
				<a href={post.path}>{post.meta.title}</a>
			</h2>
			Published {post.meta.date} -->
		</li>
	{/each}
</ul>
<script>
	export let data;
	console.log(data);
</script>

<h1>Blogs</h1>
<div>
	{#each data.result as post}
		<div class='post_block'>
			<h2>{post.title}</h2>
			<div class='post_content'>{@html post.content}</div>
		</div>
	{/each}
</div>

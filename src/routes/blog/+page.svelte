<script>
	export let data;
	console.log(data);
</script>

<h1>Blogs</h1>
<div>
	{#each data.result as post}
		<div>
			<a href="{post.path}">{post.title}</a>
			<div class='post_content'>{@html post.content}</div>
		</div>
	{/each}
</div>

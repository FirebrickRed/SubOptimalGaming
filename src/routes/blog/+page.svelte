<script>
	export let data;
	let expandedPostId = null;

	const toggleContent = postId => {
		expandedPostId = expandedPostId === postId ? null : postId;
	}
</script>

<h1>Blogs</h1>
<div>
	{#each data.result as post}
		<div class='post_block'>
			<h2 class='title' on:click={() => toggleContent(post.path)}>{post.title}</h2>
			{#if expandedPostId === post.path}
				<div class='post_content'>{@html post.content}</div>
				<h3 class='sub-title'>- {post.author}</h3>
			{/if}
		</div>
	{/each}
</div>

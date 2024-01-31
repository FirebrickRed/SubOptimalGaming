<script>
	export let data;

	let expandedPosts = data.result.map(post => post.path);

	const toggleContent = postId => {
		const index = expandedPosts.indexOf(postId);
		if(index >= 0) {
			expandedPosts.splice(index, 1);
		} else {
			expandedPosts.push(postId);
		}
	}
</script>

<h1>Blogs</h1>
<div>
	{#each data.result as post}
		<div class='post_block'>
			<h2 class='title' 
				on:click={() => toggleContent(post.path)}
				on:keydown={() => toggleContent(post.path)}
			>{post.title}</h2>
			{#if expandedPosts.includes(post.path)}
				<div class='post_content'>{@html post.content}</div>
			{/if}
			<div></div>
			<h3 class='sub-title'>- {post.author}</h3>
		</div>
	{/each}
</div>

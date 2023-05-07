<script>
	export let data;
	console.log(data);
	// @ts-ignore
	// document.getElementById('test')?.innerHTML = data.posts[0].meta.contet;
</script>

<h1>Blogs</h1>
<div>
	{#each data.posts as post}
		<div>
			<a href="{post.path}">{post.meta.title}</a>
			<div>{post.meta.content}</div>
			<!-- <p id='test'></p> -->
		</div>
	{/each}
</div>

<!-- <div class="text-column">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div> -->

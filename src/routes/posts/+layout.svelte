<script>
	import SvgTransition from '../SvgTransition.svelte'
</script>

<nav class="posts-nav">
	<a href="/posts/some-thing">post1</a>
	<a href="/posts/another-thing">post2</a>
</nav>

<SvgTransition />

<slot />

<style lang="scss">
	nav {
		grid-column: content;
		justify-self: start;
		display: grid;
		grid-auto-flow: column;
		gap: 1rem;
		// justify-items: start;
	}

	a {
		padding: 1rem;
	}
</style>

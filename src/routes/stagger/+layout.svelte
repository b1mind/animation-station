<script>
	import PageTransition from '../PageTransition.svelte'
</script>

<nav data-sveltekit-preload-data="hover">
	<a href="/stagger/some-title">Link1</a>
	<a href="/stagger/some-other-title">Link1</a>
</nav>

<PageTransition>
	<slot />
</PageTransition>

<style lang="scss">
	nav {
		grid-column: content;
	}
</style>

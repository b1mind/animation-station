<script>
	import NavStagger from '../../lib/NavStagger.svelte'
	import PageTransition from '../PageTransition.svelte'
</script>

<nav data-sveltekit-preload-data="hover">
	<NavStagger>
		<a href="/stagger/some-title">Link1</a>
		<a href="/stagger/some-other-title">Link1</a>
	</NavStagger>
</nav>

<PageTransition>
	<slot />
</PageTransition>

<style lang="scss">
	nav {
		grid-column: content;
		grid-row: 1 / 2;
		overflow: hidden;
	}
</style>

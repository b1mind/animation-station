<script>
	import KeyTransition from '$lib/KeyTransition.svelte'
	import NavStagger from '../../lib/NavStagger.svelte'
	export let data
</script>

<nav>
	<NavStagger>
		<a href="/posts/1">Test</a>
		<a href="/posts/2">Another</a>
	</NavStagger>
</nav>

<KeyTransition key={data.url}>
	<slot />
</KeyTransition>

<!--  -->
<style lang="scss">
	nav {
		grid-column: content;
		grid-row: 1 / 2;
	}
</style>

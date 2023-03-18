<script>
	import SlotTransition from '$lib/SlotTransition.svelte'
	import NavStagger from '../../lib/NavStagger.svelte'
	export let data
</script>

<nav>
	<NavStagger>
		<a href="/slot/test">Test</a>
		<a href="/slot/page">Page</a>
	</NavStagger>
</nav>

<SlotTransition key={data.url}>
	<slot />
</SlotTransition>

<!--  -->
<style lang="scss">
	nav {
		grid-column: content;
		grid-row: 1 / 2;
		overflow: hidden;
	}
</style>

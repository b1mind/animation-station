<script>
	import SlotTransition from '$lib/SlotTransition.svelte'
	export let data
</script>

<nav>
	<a href="/slot/test">Test</a>
	<a href="/slot/page">Page</a>
	<!-- {url} -->
</nav>

<SlotTransition key={data.url}>
	<slot />
</SlotTransition>

<!--  -->
<style lang="scss">
	nav {
		grid-column: content;
		grid-row: 1 / 2;
	}
</style>

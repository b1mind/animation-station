<script>
	import SlotTransition from '$lib/SlotTransition.svelte'
	import { page } from '$app/stores'
</script>

<nav>
	<a href="/slot/test">Test</a>
	<a href="/slot/page">Page</a>
</nav>

<SlotTransition key={$page.data}>
	<slot />
</SlotTransition>

<!--  -->
<style lang="scss">
	nav {
		grid-column: content;
		grid-row: 1 / 2;
	}
</style>

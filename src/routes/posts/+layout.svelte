<script>
	// import KeyTransition from './KeyTransition.svelte'
	// import { page } from '$app/stores'
	// $: data = $page.url
</script>

<nav>
	<a href="/posts/1">Test</a>
	<a href="/posts/2">Another</a>
</nav>

<!-- <KeyTransition key={data}> -->
<slot />
<!-- </KeyTransition> -->

<!--  -->
<style lang="scss">
	nav {
		grid-column: content;
		grid-row: 1 / 2;
	}
</style>

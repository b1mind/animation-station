<script>
	import KeyTransition from './KeyTransition.svelte'
	import { page } from '$app/stores'
</script>

<nav>
	<a href="/posts/test-post">Test</a>
	<a href="/posts/another-post">Another</a>
</nav>

<KeyTransition key={$page.url}>
	<slot />
</KeyTransition>

<style lang="scss">
	nav {
		grid-column: content;
	}
</style>

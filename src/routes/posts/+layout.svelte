<script>
	import KeyTransition from './KeyTransition.svelte'
	import { page } from '$app/stores'
</script>

<nav>
	<a href="/posts/1">Test</a>
	<a href="/posts/2">Another</a>
</nav>

<div>
	<KeyTransition key={$page.url}>
		<slot />
	</KeyTransition>
</div>

<style lang="scss">
	nav,
	div {
		grid-column: content;
	}
</style>

<script>
	import Test from '../Test.svelte'
</script>

<nav>
	<a href="/stagger/some-title">Link1</a>
	<a href="/stagger/some-other-title">Link1</a>
</nav>

<Test>
	<slot />
</Test>

<style lang="scss">
	nav {
		grid-column: content;
	}
</style>

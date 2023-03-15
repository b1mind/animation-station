<script>
	import TransitionPage from '../TransitionPage.svelte'
</script>

<nav class="stagger-nav">
	<a href="/stagger/some-thing">thing</a>
	<a href="/stagger/another-thing">thing2</a>
</nav>

<TransitionPage>
	<slot />
</TransitionPage>

<style lang="scss">
	nav {
		grid-column: content;
		justify-self: start;
		display: grid;
		grid-auto-flow: column;
		gap: 1rem;
		// justify-items: start;
	}

	a {
		padding: 1rem;
	}
</style>

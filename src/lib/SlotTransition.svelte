<script>
	import { slide } from '$lib/utils/gsap.js'
	export let key
</script>

{#key key}
	<div transition:slide>
		<slot />
	</div>
{/key}

<style lang="scss">
	div {
		grid-column: content;
		grid-row: 2 / 3;
		// display: contents;
	}
</style>

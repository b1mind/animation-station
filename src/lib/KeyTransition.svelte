<script>
	import { slideIn, slideOut } from '$lib/utils/gsap.js'
	export let key
</script>

{#key key}
	<div in:slideIn out:slideOut>
		<slot />
	</div>
{/key}

<style lang="scss">
	div {
		// grid-column: content;
		display: contents;
	}
</style>

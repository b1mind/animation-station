<script>
	// import { slide } from '$lib/utils/gsap.js'
	import { fly } from 'svelte/transition'
	export let key
	let duration = 1000
</script>

{#key key}
	<div in:fly={{ duration, x: 500 }} out:fly={{ duration, x: -500 }}>
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

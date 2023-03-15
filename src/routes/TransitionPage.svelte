<script>
	import { fadeInOut, overlayStagger } from '$lib/utils/gsap.js'
	import { beforeNavigate, afterNavigate } from '$app/navigation'

	let currentUrl
</script>

<!-- {#key currentUrl} -->
<div class="overlay" use:overlayStagger>
	<div class="cell" />
	<div class="cell" />
	<div class="cell" />
	<div class="cell" />
	<p>loading</p>
</div>
<!-- {/key} -->

<div class="noWrap">
	<slot />
</div>

<style lang="scss">
	.overlay {
		position: absolute;
		inset: 0;
		display: grid;
		overflow: hidden;
		visibility: hidden;
		//pointer-events: none;

		& > * {
			background-color: var(--clr-primary-dark);
		}
	}

	p {
		position: absolute;
		place-self: center;
	}

	.noWrap {
		display: contents;
	}
</style>

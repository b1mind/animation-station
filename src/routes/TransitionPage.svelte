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
	<div class="cell" />
	<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"
		><path
			fill="currentColor"
			d="M6 2v6h.01L6 8.01L10 12l-4 4l.01.01H6V22h12v-5.99h-.01L18 16l-4-4l4-3.99l-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4l4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
		/></svg
	>
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

	svg {
		position: absolute;
		place-self: center;
		color: var(--clr-background-dark);
	}

	.noWrap {
		display: contents;
	}
</style>

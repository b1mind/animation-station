<script>
	import { overlayIn, overlayOut } from '$lib/utils/gsap.js'
	import { beforeNavigate, afterNavigate } from '$app/navigation'

	let currentUrl

	beforeNavigate((e) => {
		currentUrl = e.from.route
	})

	afterNavigate((e) => {
		// currentUrl = e.to.route
		console.log(currentUrl)
	})
</script>

{#key currentUrl}
	<div class="overlay" use:overlayOut>
		<div class="cell" />
		<div class="cell" />
		<div class="cell" />
		<div class="cell" />
		<p>This is loading text</p>
	</div>
	<!-- <svg class="overlay" viewBox="0 0 360 500" use:overlayOut>
		<rect width="360" height="200" />
		<rect width="360" height="200" y="200" />
		<rect width="360" height="200" y="400" />
		<rect width="360" height="200" y="600" />
	</svg> -->
	<slot />
{/key}

<style lang="scss">
	.overlay {
		position: absolute;
		inset: 0;
		display: grid;
		overflow: hidden;
		visibility: hidden;
		& > * {
			background-color: var(--clr-primary);
		}
	}
	p {
		position: absolute;
		place-self: center;
	}
</style>

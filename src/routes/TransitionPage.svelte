<script>
	import { overlayIn, overlayOut } from '$lib/utils/gsap.js'
	import { beforeNavigate, afterNavigate } from '$app/navigation'

	let currentUrl

	beforeNavigate((e) => {
		currentUrl = e?.to?.url.pathname
	})
</script>

<!-- {#key currentUrl} -->
<div class="overlay" use:overlayOut>
	<div class="cell" />
	<div class="cell" />
	<div class="cell" />
	<div class="cell" />
	<p>This is loading {currentUrl || 'home'}</p>
</div>
<!-- {/key} -->

<slot />

<style lang="scss">
	.overlay {
		position: absolute;
		inset: 0;
		display: grid;
		overflow: hidden;
		visibility: hidden;

		& > * {
			background-color: var(--clr-background);
		}
	}

	p {
		position: absolute;
		place-self: center;
	}
</style>

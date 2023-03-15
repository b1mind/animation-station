<script>
	import { growMe } from '$lib/utils/growMe.js'
	import { beforeNavigate, afterNavigate } from '$app/navigation'

	let currentUrl
</script>

<!-- {#key currentUrl} -->
<div class="overlay" use:growMe>
	<svg viewBox="0 0 100 100">
		<circle fill="currentColor" cx="50" cy="50" r="50" />
	</svg>
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
	}

	svg {
		position: absolute;
		place-self: center;
		width: 100px;
		height: 100px;
		color: var(--clr-background-dark);
	}

	.noWrap {
		display: contents;
	}
</style>

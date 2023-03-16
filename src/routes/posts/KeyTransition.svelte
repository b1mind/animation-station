<script>
	import { growMe, slideIn, slideOut } from '$lib/utils/growMe.js'
	export let key
</script>

<div class="wrap-temp">
	{#key key}
		<!-- <svg viewBox="0 0 100 100" use:growMe>
		<circle r="50" cx="50" cy="50" />
	</svg> -->

		<div in:slideIn out:slideOut>
			<slot />
		</div>
	{/key}
</div>

<style lang="scss">
	.wrap-temp {
		grid-column: content;
		grid-row: 2 / 3;
		display: grid;
		overflow: hidden;

		& > * {
			grid-area: 1 / -1;
		}
	}

	// svg {
	// 	position: absolute;
	// 	inset: 0;
	// 	overflow: visible;
	// 	pointer-events: none;
	// }

	// .noWrap {
	// 	display: contents;
	// }
</style>

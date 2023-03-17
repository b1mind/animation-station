<script>
	import { slideIn, slideOut } from '$lib/utils/gsap.js'
	export let key
</script>

{#key key}
	<div in:slideIn out:slideOut>
		<slot />
	</div>
{/key}

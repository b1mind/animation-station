<script>
	import { page } from '$app/stores'
</script>

<hgroup>
	<h1>{$page.status}: {$page.error.message}</h1>
</hgroup>

<style lang="scss">
	hgroup {
		grid-column: content;
	}
</style>

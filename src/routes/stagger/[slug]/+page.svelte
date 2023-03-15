<script>
	export let data
</script>

<hgroup>
	<h1>{data.slug}</h1>
</hgroup>

<ul>
	{#each data.data.posts as posts}
		<li>
			{posts.title}
		</li>
	{/each}
</ul>

<style lang="scss">
	hgroup,
	ul {
		grid-column: content;
	}
</style>

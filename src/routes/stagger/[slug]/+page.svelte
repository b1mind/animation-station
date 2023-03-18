<script>
	export let data
</script>

<article>
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
</article>

<style lang="scss">
	article {
		grid-column: content;
		grid-row: 2 / 3;
	}
</style>

<script>
	// import KeyTransition from '../KeyTransition.svelte'
	export let data
	const { post, id } = data
</script>

<article>
	<!-- <KeyTransition key={data}> -->
	<hgroup>
		<h1>Post: {id}</h1>
	</hgroup>

	<ul>
		<li>
			{post.title}
		</li>
	</ul>
	<!-- </KeyTransition> -->
</article>

<style lang="scss">
	article {
		grid-column: content;
		grid-row: 2 / 3;
	}
</style>

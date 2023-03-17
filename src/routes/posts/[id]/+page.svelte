<script>
	import KeyTransition from '../KeyTransition.svelte'
	export let data
</script>

<article>
	<KeyTransition key={data}>
		<hgroup>
			<h1>Post: {data.id}</h1>
		</hgroup>

		<ul>
			<li>
				{data.data.title}
			</li>
		</ul>
	</KeyTransition>
</article>

<style lang="scss">
	article {
		grid-column: content;
		display: grid;
	}
</style>

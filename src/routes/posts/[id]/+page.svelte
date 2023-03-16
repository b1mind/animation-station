<script>
	export let data
	console.log(data)
</script>

<hgroup>
	<h1>Post: {data.id}</h1>
</hgroup>

<ul>
	<li>
		{data.data.title}
	</li>
</ul>

<style lang="scss">
	hgroup,
	ul {
		grid-column: content;
	}
</style>

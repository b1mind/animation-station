export async function load({ params }) {
	const res = await fetch('https://dummyjson.com/posts')
	const data = await res.json()
	const longFetch = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Long fetch completed successfully.')
		}, 2000)
	})
	await longFetch

	const slug = params.slug.replace('-', ' ')
	return { slug, data }
}

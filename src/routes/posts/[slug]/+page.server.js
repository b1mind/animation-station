export async function load({ params }) {
	const res = await fetch('https://dummyjson.com/posts')
	const data = await res.json()

	const slug = params.slug.replace('-', ' ')
	return { slug, data }
}

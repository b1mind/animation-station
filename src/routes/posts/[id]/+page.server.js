export async function load({ params }) {
	const res = await fetch(`https://dummyjson.com/posts/${params.id}`)
	const data = await res.json()

	return { post: data, id: params.id }
}

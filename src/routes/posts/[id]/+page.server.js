export async function load({ params }) {
	const res = await fetch(`https://dummyjson.com/posts/${params.id}`)
	const data = await res.json()

	return { data, id: params.id }
}

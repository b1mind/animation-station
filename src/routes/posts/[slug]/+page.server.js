export async function load({ params }) {
	const slug = params.slug.replace('-', ' ')
	return { slug }
}

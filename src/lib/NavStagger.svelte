<script>
	import { gsap } from 'gsap'

	function staggerNav(node) {
		console.dir(node)
		const links = node.querySelectorAll('a')
		const test = gsap
			.timeline()
			.from(links, { duration: 0.75, y: '-100%', stagger: 0.3 })
		return {
			duration: test.totalDuration() * 1000,
			tick: (from, to) => {
				test.progress(from)
			}
		}
	}
</script>

<div transition:staggerNav>
	<slot />
</div>

<style lang="scss">
	div {
		display: grid;
		grid-auto-flow: column;
		place-content: start;
		gap: 1rem;
		// grid-column: content;
	}
</style>

<script>
	import { gsap } from 'gsap'

	function staggerIn(node) {
		console.dir(node)
		const links = node.querySelectorAll('a')
		const test = gsap.timeline().from(links, {
			duration: 0.75,
			delay: 0.25,
			y: '-100%',
			stagger: { amount: 0.3, from: 'start' }
		})

		return {
			duration: test.totalDuration() * 1000,
			tick: (from, to) => {
				test.progress(from)
			}
		}
	}

	function staggerOut(node) {
		console.dir(node)
		const links = node.querySelectorAll('a')
		const test = gsap.timeline({}).from(links, {
			duration: 0.75,
			y: '100%',
			stagger: { amount: 0.3, from: 'end' }
		})

		return {
			duration: test.totalDuration() * 1000,
			tick: (from, to) => {
				test.progress(from)
			}
		}
	}
</script>

<div in:staggerIn out:staggerOut>
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

<script>
	import { beforeNavigate, afterNavigate } from '$app/navigation'
	import { onMount, onDestroy } from 'svelte'
	import { gsap } from 'gsap'

	let beforeTl

	onMount(() => {
		const parent = document.querySelector('.overlay')
		const children = parent.querySelectorAll('.cell')
		const text = parent.querySelector('svg')
		// const sibling = parent.nextElementSibling

		let duration = parent.clientWidth / 1000
		duration < 1 ? (duration = 1) : duration

		beforeTl = gsap
			.timeline({
				paused: true,
				defaults: {
					duration: duration * 0.2,
					ease: 'linear'
				}
			})
			.addLabel('start')
			.set(parent, { visibility: 'visible' })
			// .set(sibling, { visibility: 'hidden' })
			.from(
				children,
				{
					x: '-100%',
					stagger: {
						each: 0.1,
						from: 'center'
					}
				},
				0
			)
			.from(text, { duration: 0.25, opacity: 0 }, '>-0.2')

			.addLabel('after')
			// .set(sibling, { visibility: 'visible' })
			.to(text, { duration: 0.25, opacity: 0 }, 'after')
			.to(
				children,
				{
					x: '100%',
					stagger: {
						each: 0.1,
						from: 'edges'
					}
				},
				'after'
			)
			.set(parent, { visibility: 'hidden' })
	})

	function canTransition(e) {
		if (e?.type === 'link' && e?.to?.url.pathname !== e?.from?.url.pathname) return true
	}

	beforeNavigate((e) => {
		console.log('beforeNav')
		if (canTransition(e)) {
			beforeTl.restart()
			beforeTl.addPause('after')
		}
	})

	afterNavigate((e) => {
		console.log('afterNav')
		if (canTransition(e)) {
			beforeTl.removePause('after')
			beforeTl.resume()
		}
	})

	onDestroy(() => {
		console.log('need destroyed')
		beforeTl.kill()
	})

	//$: currentUrl = $page.url.pathname
</script>

<div class="overlay">
	<div class="cell" />
	<div class="cell" />
	<div class="cell" />
	<div class="cell" />
	<div class="cell" />
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M6 2v6h.01L6 8.01L10 12l-4 4l.01.01H6V22h12v-5.99h-.01L18 16l-4-4l4-3.99l-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4l4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
		/>
	</svg>
</div>

<div class="noWrap">
	<slot />
</div>

<style lang="scss">
	.overlay {
		position: absolute;
		inset: 0;
		display: grid;
		overflow: hidden;
		visibility: hidden;
		//pointer-events: none;
	}

	.cell {
		background-color: var(--clr-primary-dark);
	}

	svg {
		position: absolute;
		place-self: center;
		width: 100px;
		height: 100px;
		color: var(--clr-background-dark);
	}

	.noWrap {
		display: contents;
	}
</style>

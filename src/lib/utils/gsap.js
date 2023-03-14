import { gsap } from 'gsap'
import { afterUpdate, beforeUpdate, onDestroy } from 'svelte'
import { beforeNavigate, afterNavigate } from '$app/navigation'

export function overlayIn(node) {
	const children = node.children
	gsap.from(children, { duration: 1, x: '-100%', stagger: 0.3, ease: 'linear' })
}

export function overlayOut(node) {
	let duration = node.clientWidth / 1000
	const children = node.querySelectorAll('.cell')
	const text = node.querySelector('p')

	duration < 1 ? (duration = +1) : duration
	console.log(duration)
	gsap.set(node, { visibility: 'visible' })

	const before = gsap
		.timeline({
			paused: true,
			defaults: {
				duration: duration / 2,
				ease: 'linear'
			}
		})
		.from(children, {
			x: '-100%',
			stagger: 0.1
		})
		.from(text, { duration: 0.25, opacity: 0 }, '>-0.2')
		.pause()
		.to(text, { duration: 0.25, opacity: 0 })
		.to(children, { x: '100%', stagger: 0.1 })

	beforeNavigate(() => {
		console.log('before')
		before.restart()
	})

	// const after = gsap.timeline({ paused: true })
	afterNavigate(() => {
		console.log('after')
		before.resume()
	})

	const tl = gsap.timeline({
		defaults: {
			duration: duration / 2,
			ease: 'linear'
		}
	})

	onDestroy(() => {
		console.log('need destroyed')
	})

	// tl.from(children, {
	// 	x: '-100%',
	// 	stagger: 0.1
	// })
	// tl.from(text, { duration: 0.5, opacity: 0 }, '>-0.2')
	// tl.to(text, { duration: 0.5, opacity: 0 })
	// tl.to(children, { x: '100%', stagger: 0.1 })
}

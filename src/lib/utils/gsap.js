import { afterUpdate, beforeUpdate, onDestroy } from 'svelte'
import { beforeNavigate, afterNavigate } from '$app/navigation'

import { gsap } from 'gsap'

export function overlayIn(node) {
	const children = node.children
	gsap.from(children, { duration: 1, x: '-100%', stagger: 0.3, ease: 'linear' })
}

export function overlayStagger(node) {
	let duration = node.clientWidth / 1000
	const children = node.querySelectorAll('.cell')
	const text = node.querySelector('p')

	duration < 1 ? (duration = 1) : duration

	const beforeTl = gsap
		.timeline({
			paused: true,
			defaults: {
				duration: duration * 0.2,
				ease: 'linear'
			}
		})
		.addLabel('start')
		.set(node, { visibility: 'visible' })
		.from(children, {
			x: '-100%',
			stagger: 0.1
		})
		.from(text, { duration: 0.25, opacity: 0 }, '>-0.2')
		.addLabel('after')
		.to(text, { duration: 0.25, opacity: 0 })
		.to(children, { x: '100%', stagger: 0.1 })
		.set(node, { visibility: 'hidden' })

	beforeNavigate(() => {
		console.log('before')
		beforeTl.restart()
		beforeTl.addPause('after')
	})

	afterNavigate(() => {
		console.log('after')
		beforeTl.removePause('after')
		beforeTl.play()
	})

	onDestroy(() => {
		console.log('need destroyed')
		beforeTl.kill()
	})
}

import { afterUpdate, beforeUpdate, onDestroy } from 'svelte'
import { beforeNavigate, afterNavigate } from '$app/navigation'

import { gsap } from 'gsap'

export function fadeInOut(node) {
	beforeUpdate(() => {
		console.log('beforeUpdate')
		gsap.from(node, { opacity: 0 })
	})
	afterUpdate(() => {
		console.log('afterUpdate')
		gsap.from(node, { opacity: 1 })
	})
}

export function overlayStagger(node) {
	let duration = node.clientWidth / 1000
	const children = node.querySelectorAll('.cell')
	const text = node.querySelector('svg')
	const sibling = node.nextElementSibling
	console.dir(node)

	duration < 1 ? (duration = 1) : duration

	const beforeTl = gsap
		.timeline({
			paused: true,
			defaults: {
				duration: duration * 0.15,
				ease: 'linear'
			}
		})
		.addLabel('start')
		.set(node, { visibility: 'visible' })
		.set(sibling, { visibility: 'hidden' })
		.from(children, { x: '-100%', stagger: 0.1 }, 0)

		.addLabel('after')
		.from(text, { duration: 0.25, opacity: 0, yoyo: true }, '>-0.2')
		.set(sibling, { visibility: 'visible' })
		.to(text, { duration: 0.25, opacity: 0 }, '<')
		.to(children, { x: '100%', stagger: 0.1 }, 'after')
		.set(node, { visibility: 'hidden' })

	function canTransition(e) {
		if (e?.type === 'link' && e?.to.route.id !== e?.from.route.id) return true
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
}

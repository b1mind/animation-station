import { gsap } from 'gsap'
import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte'

let duration = 1

export function growMe(node) {
	const tl = gsap
		.timeline({})
		.fromTo(
			node.firstChild,
			{ duration, scale: 2, transformOrigin: 'center' },
			{ scale: 0 }
		)

	onMount(() => {
		console.log('use:growMe mounted')
	})

	beforeUpdate(() => {
		console.log('beforeUpdate')
	})

	afterUpdate(() => {
		console.log('afterUpdate')
	})

	onDestroy(() => {
		console.log('onDestroy')
	})

	return {
		duration: duration * 1000,
		tick: (t) => {
			tl.progress(t)
		},
		destroy() {
			console.log('returned destroy')
			tl.kill()
		}
	}
}

export function slideIn(node) {
	const tl = gsap.timeline({}).from(node, { x: '100%' })

	return {
		duration: duration * 1000,
		tick: (t) => {
			tl.progress(t)
		}
	}
}

export function slideOut(node) {
	const tl = gsap.timeline({}).to(node, { autoAlpha: 0, x: '-100%' })

	return {
		duration: duration * 1000,
		tick: (t, u) => {
			tl.progress(u)
		}
	}
}

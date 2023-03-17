import { gsap } from 'gsap'
import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte'

export function growMe(node) {
	let duration = 0.5
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

	onDestroy(() => {
		console.log('onDestroy')
	})

	//never gets destroyed when used in layouts?
	beforeUpdate(() => {
		console.log('beforeUpdate')
	})

	afterUpdate(() => {
		console.log('afterUpdate')
	})

	return {
		duration: duration * 1000,
		tick: (t) => {
			tl.progress(t)
		}
	}
}

export function slideIn(node) {
	const tl = gsap
		.timeline({})
		.from(node, { x: '100%', autoAlpha: 0 })
		.from(node.firstChild, { duration: 1, y: '100%', ease: 'bounce' })

	return {
		duration: tl.totalDuration() * 1000,
		tick: (t) => {
			tl.progress(t)
		}
	}
}

export function slideOut(node) {
	const tl = gsap
		.timeline({})
		.set(node, { position: 'absolute' })
		.to(node.firstChild, { y: '100%' })
		.to(node, { autoAlpha: 0 }, '<')

	return {
		duration: tl.totalDuration() * 1000,
		tick: (t, u) => {
			tl.progress(u)
		}
	}
}

export function slide(node) {
	const tl = gsap
		.timeline({})
		.fromTo(node, { x: '100%' }, { x: 0, ease: 'back.out(0.7)' })

	return {
		duration: tl.totalDuration() * 1000,
		tick: (from, to) => {
			tl.progress(from)
		}
	}
}

import { gsap } from 'gsap'

export function overlayIn(node) {
	const children = node.children
	gsap.from(children, { duration: 1, x: '-100%', stagger: 0.3, ease: 'linear' })
}

export function overlayOut(node) {
	let duration = node.clientWidth / 1000
	const children = node.querySelectorAll('.cell')
	const text = node.querySelector('p')

	duration < 1 ? (duration = 1) : duration

	const tl = gsap.timeline({
		defaults: {
			duration: duration / 2,
			ease: 'linear'
		}
	})

	gsap.set(node, { visibility: 'visible' })

	tl.from(children, {
		x: '-100%',
		stagger: 0.3
	})
	tl.from(text, { duration: 0.75, opacity: 0 })
	tl.to(text, { duration: 0.75, opacity: 0 })
	tl.to(children, { x: '100%', stagger: 0.3 })
}

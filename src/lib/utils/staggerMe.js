import { beforeNavigate, afterNavigate } from '$app/navigation'

import { gsap } from 'gsap'

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
				duration: duration * 0.2,
				ease: 'linear'
			}
		})
		.addLabel('start')
		.set(node, { visibility: 'visible' })
		.set(sibling, { visibility: 'hidden' })
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
		.set(sibling, { visibility: 'visible' })
		.to(text, { duration: 0.25, opacity: 0 }, '<')
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
		.set(node, { visibility: 'hidden' })

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

	return {
		destroy() {
			console.log('need destroyed')
			beforeTl.kill()
		}
	}
}

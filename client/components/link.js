import { component } from 'picoapp'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { hover } from '../lib/hover'

gsap.registerPlugin(SplitText)

export default component((node, ctx) => {
  let animating = false

  const split = new SplitText(node, { type: 'chars', charsClass: 'will-change-transform' })
  const tl = gsap.timeline({ paused: true }).to(split.chars, {
    y: '-0.25em',
    stagger: {
      amount: 0.25,
      yoyo: true,
      repeat: 1,
    },
    duration: 0.2,
    ease: 'sine.inOut',
    onStart() {
      animating = true
    },
    onComplete() {
      animating = false
    },
  })

  hover(node, {
    enter: () => {
      if (animating) return
      tl.restart()
    },
  })
})

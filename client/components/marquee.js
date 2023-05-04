import { component } from 'picoapp'
import choozy from 'choozy'
import gsap from 'gsap'
import { noop, rect } from 'martha'
import { hover } from '../lib/hover'
import { io } from '../lib/io'

export default component((node, ctx) => {
  let { inner, el } = choozy(node)
  let prevReps = 0
  let reps = 0

  let isReversed = node.dataset?.direction === 'right'
  let pauseOnHover = node.hasAttribute('data-pause-on-hover')
  let speed = +node.dataset?.speed ?? 0.5
  let x = 0
  let tl = null
  let offHover = noop

  if (pauseOnHover) {
    offHover = hover(node, {
      enter: () => tl?.pause?.(),
      leave: () => tl?.play?.(),
    })
  }

  let offIo = io(node, {
    enter: () => tl?.play?.(),
    exit: () => tl?.pause?.(),
  })

  ctx.on('resize', ({ ww }) => {
    let w = rect(el).width

    reps = Math.ceil(ww / w)

    if (reps !== prevReps) {
      while (inner.children.length > 1) {
        inner.children[inner.children.length - 1].remove()
      }

      for (let i = 0; i < reps; i++) {
        let clone = el.cloneNode(true)
        clone.setAttribute('aria-hidden', 'true')
        inner.append(clone)
      }
    }

    x = Math.round(w)

    prevReps = reps

    tl && tl.kill()
    tl = gsap.timeline({ repeat: -1, paused: true }).fromTo(
      inner,
      { x: isReversed ? -x : 0 },
      {
        x: isReversed ? 0 : -x,
        duration: x / (100 * speed),
        ease: 'none',
      },
    )
  })

  return () => {
    tl && tl.kill()
    offHover()
    offIo()
  }
})

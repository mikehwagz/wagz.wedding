import { component } from 'picoapp'
import choozy from 'choozy'
import gsap from 'gsap'
import { each } from 'martha'

export default component((node, ctx) => {
  const { paths } = choozy(node)

  gsap.set(paths, { drawSVG: '0%' })

  ctx.on('initScroll', ({ scrollWrapper }) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: scrollWrapper,
        trigger: node,
        start: 'top 80%',
        end: 'bottom 90%',
        scrub: true,
        invalidateOnRefresh: true,
      },
    })

    each(paths, path => {
      tl.to(path, {
        drawSVG: '100% live',
        ease: 'none',
      })
    })
  })
})

import { component } from 'picoapp'
import gsap from 'gsap'
import { qs } from 'martha'

export default component((node, ctx) => {
  const target = node.dataset.parallax ? node : qs('[data-parallax]', node)
  const props = JSON.parse(target.dataset.parallax)

  target.removeAttribute('data-parallax')

  ctx.on('initScroll', ({ scrollWrapper }) => {
    gsap.fromTo(
      target,
      {
        yPercent: () => props?.from ?? 0,
      },
      {
        yPercent: () => props.to,
        ease: 'none',
        scrollTrigger: {
          scroller: scrollWrapper,
          trigger: node,
          start: () => props?.start ?? 'top bottom',
          end: () => props?.end ?? 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    )
  })

  return () => {}
})

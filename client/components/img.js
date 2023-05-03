import { component } from 'picoapp'
import choozy from 'choozy'
import { noop, on, remove } from 'martha'

export default component((node, ctx) => {
  let { lqip, img } = choozy(node)
  let offEnd = noop

  let offLoad = on(img, 'load', () => {
    offLoad()
    offLoad = noop

    if (lqip) {
      offEnd = on(img, 'transitionend', () => {
        offEnd()
        offEnd = noop

        lqip.remove()
      })
    }

    requestAnimationFrame(() => {
      remove(img, 'opacity-0')
    })
  })

  img.setAttribute('srcset', img.dataset.srcset)
  img.removeAttribute('data-srcset')

  return () => {
    offEnd()
    offLoad()
  }
})

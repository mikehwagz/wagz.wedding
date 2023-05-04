import { component } from 'picoapp'
import { attr, once, remove } from 'martha'
import { io } from '../lib/io'

export default component((img, ctx) => {
  io(img, {
    once: true,
    enter() {
      once(img, 'load', () => {
        requestAnimationFrame(() => {
          remove(img, 'opacity-0')
        })
      })

      if (attr(img, 'data-srcset')) {
        attr(img, 'srcset', img.dataset.src)
        attr(img, 'data-srcset', null)
      } else {
        attr(img, 'src', img.dataset.src)
        attr(img, 'data-src', null)
      }
    },
  })
})

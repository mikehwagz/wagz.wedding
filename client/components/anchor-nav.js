import { component } from 'picoapp'
import { qs, attr, on } from 'martha'
import { expoInOut } from 'eases'
import app from '../app'
import choozy from 'choozy'

export default component((node, ctx) => {
  const { links } = choozy(node)
  const getOffset = () => -(137 / 1536) * ctx.getState().ww

  if (window.location.hash) {
    const target = qs(window.location.hash)

    if (target) {
      app.lenis.scrollTo(target, {
        immediate: true,
        offset: getOffset(),
      })
    }
  }

  on(links, 'click', ev => {
    ev.preventDefault()

    app.lenis.scrollTo(attr(ev.currentTarget, 'href'), {
      duration: 1,
      easing: expoInOut,
      offset: getOffset(),
    })
  })
})

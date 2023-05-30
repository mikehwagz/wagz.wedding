import { component } from 'picoapp'
import { attr, on } from 'martha'
import { expoInOut } from 'eases'
import app from '../app'
import choozy from 'choozy'

export default component((node, ctx) => {
  const { links } = choozy(node)

  on(links, 'click', ev => {
    ev.preventDefault()

    app.lenis.scrollTo(attr(ev.currentTarget, 'href'), {
      duration: 1,
      easing: expoInOut,
      offset: -(137 / 1536) * ctx.getState().ww,
    })
  })
})

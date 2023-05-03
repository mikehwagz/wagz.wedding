import { component } from 'picoapp'
import choozy from 'choozy'
import gsap from 'gsap'
import { createFocusTrap } from 'focus-trap'
import app from '../app'
import { each } from 'martha'

export default component((node, ctx) => {
  const { links } = choozy(node)

  each(links, link => {
    link.refs = choozy(link, 'js:link-')
  })

  let tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: 'quart',
      duration: 1,
    },
  })

  let trap = createFocusTrap(node.parentNode, {
    escapeDeactivates: false,
    initialFocus: '[data-initial-focus]',
  })

  ctx.on('menu:toggle', ({ isMenuOpen }) => {
    tl.clear()

    if (isMenuOpen) {
      ctx.emit('app:lock')
      tl.set(node, { visibility: 'visible', opacity: 0 })
        .set(links, { opacity: 0 })
        .add(() => trap.activate())
        .to(node, { opacity: 1 }, 0)
        .to(links, { opacity: 1, duration: 1, ease: 'quart.inOut', stagger: 0.08 }, 0)
    } else {
      ctx.emit('app:unlock')
      trap.deactivate()
      tl.to(node, { autoAlpha: 0, duration: 0.5 }, 0)
    }

    tl.restart()
  })

  ctx.on('resize', ({ ww, isMenuOpen }) => {
    if (ww > 768 && isMenuOpen) {
      ctx.emit('menu:toggle', { isMenuOpen: false })
    }
  })

  app.pjax.on('beforeLeave', ({ href }) => {
    setActiveLinks(href)
  })

  app.pjax.on('afterEnter', ({ href }) => {
    setActiveLinks(href)
  })

  function setActiveLinks(href) {
    each(
      links.filter(link => link?.refs?.els),
      link => {
        if (link.href === href) {
          gsap.set(link.refs.els, {
            x: 0,
          })
        } else {
          gsap.set(link.refs.els, {
            clearProps: 'x',
          })
        }
      },
    )
  }
})

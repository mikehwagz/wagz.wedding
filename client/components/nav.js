import { component } from 'picoapp'
import { qs, attr, on } from 'martha'
import { expoInOut } from 'eases'
import app from '../app'
import choozy from 'choozy'
import gsap from 'gsap'
import { createFocusTrap } from 'focus-trap'
import { signal } from '../lib/signal'

export default component((node, ctx) => {
  const [open, setOpen] = signal(false, update)

  const { links, menuLinks, menuToggle, menuText, closeText, menu } = choozy(node)
  const allLinks = [links, menuLinks].flat()

  const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 1, ease: 'expo' },
  })

  const trap = createFocusTrap(node, {
    escapeDeactivates: false,
  })

  on(menuToggle, 'click', () => {
    setOpen(!open())
  })

  on(document, 'keyup', ({ key }) => {
    if (key === 'Escape') {
      setOpen(false)
    }
  })

  on(allLinks, 'click', ev => {
    ev.preventDefault()

    if (open()) {
      setOpen(false)
    }

    app.lenis.scrollTo(attr(ev.currentTarget, 'href'), {
      duration: 1,
      easing: expoInOut,
      offset: getOffset(),
    })
  })

  function getOffset() {
    return ctx.getState().ww < 768 ? -100 : -137
  }

  if (window.location.hash) {
    const target = qs(window.location.hash)

    if (target) {
      app.lenis.scrollTo(target, {
        immediate: true,
        offset: getOffset(),
      })
    }
  }

  function update(open, prevOpen) {
    if (open === prevOpen) return

    tl.clear()

    if (open) {
      trap.activate()

      tl.to(
        menu,
        {
          autoAlpha: 1,
          duration: 0.5,
        },
        0,
      )
        .fromTo(
          menuLinks,
          {
            y: gsap.utils.wrap(menuLinks.map((_, i) => 20 + i * 5)),
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.03,
          },
          0.1,
        )
        .to(
          [menuText, closeText],
          {
            autoAlpha: gsap.utils.wrap([0, 1]),
            duration: 0.5,
          },
          0,
        )
    } else {
      trap.deactivate()

      tl.to(
        menu,
        {
          autoAlpha: 0,
          duration: 0.5,
        },
        0,
      ).to(
        [menuText, closeText],
        {
          autoAlpha: gsap.utils.wrap([1, 0]),
          duration: 0.5,
        },
        0,
      )
    }

    tl.restart()
  }
})

import { component } from 'picoapp'
import choozy from 'choozy'
import { on } from 'martha'
import gsap from 'gsap'

export default component((node, ctx) => {
  const { topBun, patty, bottomBun } = choozy(node)

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: 'quart',
      duration: 1,
    },
  })

  on(node, 'click', () => {
    ctx.emit('menu:toggle', { isMenuOpen: !ctx.getState().isMenuOpen })
  })

  ctx.on('menu:toggle', ({ isMenuOpen }) => {
    tl.clear()
      .to(
        [topBun, bottomBun],
        {
          rotation: isMenuOpen ? gsap.utils.wrap([-45, 45]) : 0,
          y: isMenuOpen ? gsap.utils.wrap([10, -9]) : 0,
        },
        0,
      )
      .to(
        patty,
        {
          scaleX: isMenuOpen ? 0 : 1,
          autoAlpha: isMenuOpen ? 0 : 1,
        },
        0,
      )
      .restart()
  })
})

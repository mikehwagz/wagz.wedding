import { component } from 'picoapp'
import choozy from 'choozy'
import { on, qs } from 'martha'
import gsap from 'gsap'
import Vlitejs from 'vlitejs'
import { createFocusTrap } from 'focus-trap'

export default component((node, ctx) => {
  const wrap = qs('#video-player')
  const { playButton } = choozy(node)
  const { closeButton } = choozy(wrap)

  const video = document.createElement('video')
  video.src = playButton.dataset.src
  video.playsInline = true

  wrap.append(video)

  const vlite = new Vlitejs(video, {
    options: {
      volume: false,
      bigPlay: false,
      autoHide: true,
    },
  })

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: 'quart',
      duration: 1,
    },
  })

  let trap = createFocusTrap(wrap, {
    escapeDeactivates: false,
  })

  const offPlayClick = on(playButton, 'click', () => {
    vlite.player.seekTo(0)
    vlite.player.play()

    ctx.emit('video-player:toggle', { isVideoPlayerOpen: true })
  })

  const offCloseClick = on(closeButton, 'click', () => {
    ctx.emit('video-player:toggle', { isVideoPlayerOpen: false })
  })

  ctx.on('video-player:toggle', ({ isVideoPlayerOpen }) => {
    if (isVideoPlayerOpen) {
      show()
    } else {
      hide()
    }
  })

  function show() {
    ctx.emit('app:lock')
    tl.clear()
    tl.set(wrap, { opacity: 0, display: 'block' })
    tl.add(() => {
      trap.activate()
      vlite.player.seekTo(0)
      vlite.player.play()
    })
    tl.to(wrap, { opacity: 1 })
    tl.restart()
  }

  function hide() {
    ctx.emit('app:unlock')
    trap.deactivate()
    vlite.player.pause()
    tl.clear()
    tl.to(wrap, { opacity: 0, duration: 0.5 })
    tl.set(wrap, { display: 'none' })
    tl.restart()
  }

  return () => {
    offPlayClick()
    offCloseClick()
    vlite.destroy()
    video.remove()
  }
})

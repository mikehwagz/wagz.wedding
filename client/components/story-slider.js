import { component } from 'picoapp'
import { on, wrap, each, qs } from 'martha'
import { mm } from '../lib/mm'
import { signal } from '../lib/signal'
import choozy from 'choozy'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default component((node, ctx) => {
  const { inc, dec, slides, titles, progressBars } = choozy(node)

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.6,
      ease: 'expo',
    },
  })

  const [state, setState] = signal(
    {
      locked: false,
      index: -1,
    },
    update,
  )

  let init = true
  let lockThreshold = 300
  let lockTimeout = null
  let currentVideo = null

  const offDecDown = on(dec, 'pointerdown', handlePointerDown)
  const offIncDown = on(inc, 'pointerdown', handlePointerDown)
  const offDecUp = on(dec, 'pointerup', () => handlePointerUp(-1))
  const offIncUp = on(inc, 'pointerup', () => handlePointerUp(1))
  const offKeyup = on(document, 'keyup', ({ key }) => {
    if (key === 'ArrowLeft') handlePointerUp(-1)
    if (key === 'ArrowRight') handlePointerUp(1)
  })

  const [isPortrait, offOrientationChange] = mm('(orientation: portrait)', handleOrientationChange)

  ctx.on('resize', () => {
    each(titles, title => {
      title.split && title.split.revert()
      title.split = new SplitText(title, {
        type: 'lines,words',
        wordsClass: 'will-change-transform',
        linesClass: 'overflow-hidden',
      })
    })

    if (init) {
      init = false
      handlePointerUp(1)
    }
  })

  function handlePointerDown() {
    getVideoElement()?.pause?.()

    lockTimeout = setTimeout(lock, lockThreshold)
  }

  function handlePointerUp(dir) {
    clearLockTimeout()

    getVideoElement()
      ?.play?.()
      .catch(() => {})

    if (state().locked) {
      unlock()
    } else {
      dir === 1 ? nextSlide() : prevSlide()
    }
  }

  function update({ index }, prev) {
    if (index !== prev.index) {
      each(progressBars, (bar, i) => gsap.set(bar, { scaleX: i < index ? 1 : 0 }))

      const prevVideo = getVideoElement(prev.index)
      if (prevVideo) prevVideo.pause()

      handleOrientationChange()

      const prevSlide = slides?.[prev.index]
      const prevTitle = titles?.[prev.index]
      const slide = slides[index]
      const title = titles[index]
      const words = title.split.words

      tl.clear()
      tl.addLabel('setup')
      tl.addLabel('animate')

      if (prevSlide) {
        tl.set(prevSlide, { zIndex: 2 }, 'setup')
        tl.set(prevTitle, { autoAlpha: 0 }, 'setup')
        tl.to(
          prevSlide,
          {
            autoAlpha: 0,
            duration: 0.4,
          },
          'animate',
        )
      }

      tl.set(slide, { zIndex: 1, scale: 1.1 }, 'setup')
      tl.set(title, { autoAlpha: 1 }, 'setup')
      tl.set(words, { yPercent: 100 }, 'setup')
      tl.to(
        slide,
        {
          autoAlpha: 1,
          scale: 1,
        },
        'animate',
      )
      tl.to(
        words,
        {
          yPercent: 0,
          stagger: 0.05,
        },
        'animate',
      )

      tl.restart()
    }
  }

  ctx.on('tick', () => {
    if (currentVideo) {
      const { currentTime, duration } = currentVideo
      const percent = currentTime / duration
      gsap.set(progressBars[state().index], { scaleX: percent })

      if (percent - 0.99 > 0) {
        nextSlide()
      }
    }
  })

  return () => {
    offDecDown()
    offIncDown()
    offDecUp()
    offIncUp()
    offKeyup()
    offOrientationChange()
  }

  function clearLockTimeout() {
    if (lockTimeout !== null) {
      clearTimeout(lockTimeout)
      lockTimeout = null
    }
  }

  function handleOrientationChange() {
    const video = getVideoElement()
    const progressBar = progressBars[state().index]

    gsap.killTweensOf(progressBar)

    if (video) {
      video.currentTime = 0
      video.play().catch(() => {})
      currentVideo = video
    } else {
      currentVideo = null
      gsap.fromTo(
        progressBar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'linear',
          duration: 10,
          onComplete: () => {
            nextSlide()
          },
        },
      )
    }
  }

  function lock() {
    setState(prevState => ({
      ...prevState,
      locked: true,
    }))
  }

  function unlock() {
    setState(prevState => ({
      ...prevState,
      locked: false,
    }))
  }

  function nextSlide() {
    setState(prevState => ({
      ...prevState,
      index: wrap(prevState.index + 1, slides.length),
    }))
  }

  function prevSlide() {
    setState(prevState => ({
      ...prevState,
      index: wrap(prevState.index - 1, slides.length),
    }))
  }

  function getVideoElement(index = state().index) {
    return qs(
      `[data-orientation="${
        isPortrait() ? 'portrait' : 'landscape'
      }"] video, [data-orientation="both"] video`,
      slides[index],
    )
  }
})

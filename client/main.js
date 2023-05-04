import './style.css'
import 'focus-visible'
import { add, on, remove, size } from 'martha'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import app from './app'
import fonts from './lib/fonts'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(SplitText, ScrollTrigger)

main()

async function main() {
  on(window, 'resize', resize)

  app.on('lock', () => add(document.body, 'overflow-hidden'))
  app.on('unlock', () => remove(document.body, 'overflow-hidden'))

  gsap.ticker.add(tick)

  await fonts([
    { family: 'Gooper', options: { weight: 300 } },
    { family: 'Gooper', options: { weight: 300, style: 'italic' } },
    { family: 'Candy Darling', options: { weight: 400 } },
  ])

  app.lenis = new Lenis({ lerp: 0.115, wrapper: app.getState().scrollWrapper })

  app.mount()
  resize()

  app.emit('initScroll')
}

function resize() {
  ScrollTrigger.refresh(true)
  app.emit('resize', size())
}

function tick(time) {
  app.lenis.raf(time * 1000)
  app.emit('tick')
}

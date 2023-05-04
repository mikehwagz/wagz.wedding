import './style.css'
import 'focus-visible'
import { add, on, remove, size } from 'martha'
import gsap from 'gsap'
import app from './app'
import fonts from './lib/fonts'

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

  app.mount()
}

function resize() {
  app.emit('resize', size())
}

function tick() {
  app.emit('tick')
}

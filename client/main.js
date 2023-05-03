import './style.css'
import 'focus-visible'
import { listen } from 'quicklink'
import { add, on, remove, size } from 'martha'
import gsap from 'gsap'
import app from './app'
import fonts from './lib/fonts'

main()

async function main() {
  if (process.env.NODE_ENV === 'production') listen()

  on(window, 'resize', resize)
  on(document, 'mousemove', mousemove)

  app.on('lock', () => add(document.body, 'overflow-hidden'))
  app.on('unlock', () => remove(document.body, 'overflow-hidden'))

  gsap.ticker.add(tick)

  await fonts([
    { family: 'Neue Montreal', options: { weight: 'normal' } },
    { family: 'Neue Montreal', options: { weight: 500 } },
    { family: 'Neue Montreal', options: { weight: 'bold' } },
  ])

  app.mount()
}

function resize() {
  app.emit('resize', size())
}

function tick() {
  app.emit('tick')
}

function mousemove({ x, y }) {
  app.emit('mousemove', { mx: x, my: y })
}

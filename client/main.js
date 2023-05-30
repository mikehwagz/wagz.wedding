import './style.css'
import 'focus-visible'
import { add, on, remove, size } from 'martha'
import gsap from 'gsap'
import { SplitText, ScrollTrigger, DrawSVGPlugin } from 'gsap/all'
import app from './app'
import fonts from './lib/fonts'
import Lenis from '@studio-freight/lenis'
import * as Sentry from '@sentry/browser'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://68a97a3e89d94380b66da68132e3c241@o688844.ingest.sentry.io/4505171345801216',
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  })
}

gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin)

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

  app.lenis = new Lenis({
    lerp: 0.115,
    wrapper: app.getState().scrollWrapper,
  })

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

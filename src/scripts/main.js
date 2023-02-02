import gsap from 'gsap'
// import { listen } from 'quicklink'
import { on, size } from 'martha'
import { fonts } from './lib/fonts'
import app from './app'

/**
 * Initializes link prefetching based on visibility in viewport for
 * instant next-page navigation via quicklink (production-only)
 * https://getquick.link/
 */
// if (process.env.NODE_ENV === 'production') {
//   listen()
// }

/**
 * Waits for all fonts to load before initializing
 */
fonts([
  { family: 'Candy Darling', options: { weight: 400, style: 'normal' } },
  { family: 'Gooper', options: { weight: 300, style: 'normal' } },
  { family: 'Gooper', options: { weight: 300, style: 'italic' } },
]).then(() => {
  /**
   * Attaches global resize event
   */
  on(window, 'resize', resize)

  /**
   * Starts global requestAnimationFrame loop
   * https://greensock.com/docs/v3/GSAP/gsap.ticker
   */
  gsap.ticker.add((time, deltaTime, frame) => {
    /**
     * Emits tick event and updates state
     */
    app.emit('tick', { time, deltaTime, frame })
  })

  app.mount()
  resize()
})

function resize() {
  /**
   * Emits resize event and updates state
   */
  app.emit('resize', size())
}

import { picoapp } from 'picoapp'
import { size, qs } from 'martha'

import gridOverlay from './components/grid-overlay'
import img from './components/img'
import link from './components/link'
import marquee from './components/marquee'
import parallax from './components/parallax'
import accordion from './components/accordion'
import schedule from './components/schedule'
import form from './components/form.jsx'
import nav from './components/nav'

const components = {
  'grid-overlay': gridOverlay,
  nav,
  form,
  link,
  marquee,
  parallax,
  accordion,
  schedule,
  img,
}

const state = {
  ...size(),
  scrollWrapper: qs('#scroll-wrapper'),
}

export default picoapp(components, state)

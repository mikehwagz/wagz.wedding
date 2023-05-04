import { picoapp } from 'picoapp'
import { size } from 'martha'

import gridOverlay from './components/grid-overlay'
import img from './components/img'
import link from './components/link'

const components = {
  'grid-overlay': gridOverlay,
  img,
  link,
}

const state = {
  ...size(),
}

export default picoapp(components, state)

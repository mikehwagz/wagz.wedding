import { picoapp } from 'picoapp'
import { size } from 'martha'

import img from './components/img'

const components = {
  img,
}

const state = {
  ...size(),
  mx: 0,
  my: 0,
}

export default picoapp(components, state)

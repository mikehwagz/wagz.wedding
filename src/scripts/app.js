import { picoapp } from 'picoapp'
import { size } from 'martha'
import { isDevice } from './lib/is-device'

const components = {}

const state = {
  ...size(),
  isDevice: isDevice(),
  time: 0,
  deltaTime: 0,
  frame: 0,
}

export default picoapp(components, state)

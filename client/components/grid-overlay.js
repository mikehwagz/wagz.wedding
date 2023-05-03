import { component } from 'picoapp'
import { on, toggle } from 'martha'

export default component(node => {
  on(window, 'keyup', ({ key, ctrlKey }) => {
    if (key === 'g' && ctrlKey) {
      toggle(node, 'opacity-0')
    }
  })
})

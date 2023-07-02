import { on } from 'martha'

export function del(parent, selector, type, handler) {
  return on(parent, type, ev => {
    let el = ev.target.closest(selector)
    if (el) handler(el, ev)
  })
}

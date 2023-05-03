import { on, noop } from 'martha'

export function mm(query, handler) {
  const mql = window.matchMedia(query)
  return [() => mql.matches, handler ? on(mql, 'change', handler) : noop]
}

import { has, on } from 'martha'

export default function hover(el, { enter, leave, focus = false }) {
  let hovering = false

  let handleEnter = e => {
    if (hovering) return
    hovering = true
    enter(e)
  }

  let handleLeave = e => {
    if (!hovering) return
    hovering = false
    leave(e)
  }

  let events = []

  events.push(on(el, 'mouseenter', handleEnter), on(el, 'mouseleave', handleLeave))

  if (focus) {
    events.push(
      on(el, 'focus', e => {
        if (has(el, 'focus-visible')) {
          handleEnter(e)
        }
      }),
      on(el, 'blur', handleLeave),
    )
  }

  return () => {
    events.map(off => off())
  }
}

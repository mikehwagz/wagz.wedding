export function signal(initial, effect) {
  let current = initial
  return [
    () => current,
    (x) => {
      current = x
      effect(current)
    },
  ]
}

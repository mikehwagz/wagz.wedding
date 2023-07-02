export function signal(initialState, effect) {
  let currentState = initialState
  return [
    () => currentState,
    newState => {
      newState = typeof newState === 'function' ? newState(currentState) : newState
      if (JSON.stringify(newState) === JSON.stringify(currentState)) return
      let prevState = currentState
      currentState = newState
      effect(currentState, prevState)
    },
  ]
}

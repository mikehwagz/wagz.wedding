import FFO from 'fontfaceobserver'

export function fonts(m) {
  return Promise.all(
    m.map((entry) => new FFO(entry.family, entry.options).load()),
  )
}

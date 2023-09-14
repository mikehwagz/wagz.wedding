import { component } from 'picoapp'

export default component((node, ctx) => {
  const offTick = ctx.on('tick', () => {
    const now = new Date()
    const then = new Date('2023-09-23T18:00:00')
    const diff = then - now
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    const parts = [
      [days, 'day'],
      [hours, 'hour'],
      [minutes, 'minute'],
      [seconds, 'second'],
    ]

    const pluralize = (num, word) => {
      return num === 1 ? `${num} ${word}` : `${num} ${word}s`
    }

    // twelve hours
    if (diff < -1000 * 60 * 60 * 12) {
      node.textContent = 'Thanks for coming!'
      offTick()
      return
    }

    // it's time!
    if (diff < 0) {
      node.textContent = "It's here!"
      offTick()
      return
    }

    node.textContent = `${parts
      .reduce((acc, [num, word]) => {
        if (num > 0) {
          acc.push(pluralize(num, word))
        }
        return acc
      }, [])
      .join(', ')} away!`
  })
})

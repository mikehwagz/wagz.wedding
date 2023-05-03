import { component } from 'picoapp'
import choozy from 'choozy'
import { each, rect } from 'martha'
import gsap from 'gsap'

export default component((node, ctx) => {
  const { items } = choozy(node)

  ctx.on('resize', () => {
    gsap.set(node, { clearProps: 'marginBottom' })

    const columns = new Map()

    each(items, item => {
      const bcr = rect(item)
      const key = `${bcr.left},${bcr.right}`

      if (columns.has(key)) {
        columns.set(key, [...columns.get(key), item])
      } else {
        columns.set(key, [item])
      }
    })

    columns.forEach(els => {
      gsap.set(els, { y: 0 })

      each(els, (el, i) => {
        if (i === 0) return
        const prevBcr = rect(els[i - 1])
        const bcr = rect(el)
        const gap = +getComputedStyle(node).getPropertyValue('--gap')
        gsap.set(el, { y: prevBcr.bottom - bcr.top + gap })
      })
    })

    const heightDiff = Math.max(...items.map(el => rect(el).bottom)) - rect(node).bottom
    gsap.set(node, { marginBottom: heightDiff < 0 ? heightDiff : 0 })
  })

  return () => {}
})

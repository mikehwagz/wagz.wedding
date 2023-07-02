import { component } from 'picoapp'
import sqzbx from 'sqzbx'

export default component((node, ctx) => {
  const accordion = sqzbx(node, {
    collapsible: true,
    multiple: false,
    resize: false,
  })

  ctx.on('resize', () => accordion.resize())

  accordion.mount()
})

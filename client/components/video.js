import { component } from 'picoapp'
import choozy from 'choozy'
import io from '../lib/io'

export default component((node, ctx) => {
  let { video } = choozy(node)

  let offIo = io(video, {
    enter: () => video.play(),
    exit: () => video.pause(),
    threshold: 0.1,
  })

  return () => offIo()
})

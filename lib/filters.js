// const blocksToHtml = require('@sanity/block-content-to-html')
// const h = blocksToHtml.h
// const { imageBuilder } = require('../lib/sanity')

module.exports = {
  // resolve_path: resolvePath,
  // blocksToHtml: (blocks) => {
  //   try {
  //     return blocksToHtml({
  //       blocks,
  //       serializers: {
  //         types: {
  //           block: (props) => {
  //             const { style = 'normal' } = props.node

  //             if (style === 'h2') {
  //               return h(
  //                 'h2',
  //                 {
  //                   className:
  //                     'font-tenor text-26 xs:text-32 s:text-40 leading-120 mb-30',
  //                 },
  //                 props.children,
  //               )
  //             }

  //             if (style === 'h3') {
  //               return h(
  //                 'h3',
  //                 {
  //                   className: 'font-tenor text-20 s:text-22 leading-120 mb-20',
  //                 },
  //                 props.children,
  //               )
  //             }

  //             if (style === 'normal') {
  //               return h('p', {}, props.children)
  //             }

  //             return blocksToHtml.defaultSerializers.types.block(props)
  //           },
  //         },
  //         marks: {
  //           external_link: ({ children, mark }) =>
  //             h(
  //               'a',
  //               {
  //                 className: 'underline hover:no-underline',
  //                 href: mark.url,
  //                 target: mark.new_tab ? '_blank' : null,
  //                 rel: mark.new_tab ? 'noopener noreferrer' : null,
  //               },
  //               children,
  //             ),
  //           internal_link: ({ children, mark }) => {
  //             return h(
  //               'a',
  //               {
  //                 className: 'underline hover:no-underline',
  //                 href: resolvePath(mark.reference),
  //                 target: mark.new_tab ? '_blank' : null,
  //                 rel: mark.new_tab ? 'noopener noreferrer' : null,
  //               },
  //               children,
  //             )
  //           },
  //           footnote: ({ children, mark }) => {
  //             return h('span', { className: 'footnote' }, [
  //               children,
  //               h('span', {}, mark.index + 1),
  //             ])
  //           },
  //         },
  //       },
  //     })
  //   } catch (e) {
  //     console.log('Error converting blocks to HTML in blocksToHtml filter:', e)
  //     return ''
  //   }
  // },
  // srcset: (image) => {
  //   return [400, 650, 768, 1024, 1280, 1536]
  //     .map(
  //       (width) =>
  //         `${imageBuilder
  //           .image(image)
  //           .dpr(2)
  //           .width(width)
  //           .auto('format')
  //           .fit('max')
  //           .url()} ${width}w`,
  //     )
  //     .join(',')
  // },
  // lqip: (image) => {
  //   return imageBuilder
  //     .image(image)
  //     .dpr(1)
  //     .width(4)
  //     .blur(10)
  //     .auto('format')
  //     .fit('max')
  //     .url()
  // },
  json: (x) => JSON.stringify(x),
}

// function resolvePath({ slug, _type, isHomepage }) {
//   return {
//     page: isHomepage ? `/` : `/${slug}/`,
//     story: `/stories/${slug}/`,
//     story_listing: `/stories/`,
//     faq: `/faq/`,
//   }[_type]
// }

import { component } from 'picoapp'
import choozy from 'choozy'
import { on, qsa, wrap } from 'martha'
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js'
import { del } from '../lib/del'
import algoliasearch from 'algoliasearch/dist/algoliasearch-lite.esm.browser.js'

export default component((node, ctx) => {
  const searchClient = algoliasearch('WU6A99GNOQ', 'a737c08ff3857a1aa3a6f18f4f6b1b4c')
  const sanity = SanityClient.createClient({
    projectId: 'vphgm86p',
    dataset: 'production',
    apiVersion: '2023-05-07',
    useCdn: false,
  })

  const { container, panelContainer } = choozy(node)

  const { setQuery } = autocomplete({
    container,
    panelContainer,
    placeholder: 'Ben Franklin',
    detachedMediaQuery: 'none',
    classNames: {
      list: 'border-x-1 border-b-1 divide-y-1 rounded-b-7',
      inputWrapperPrefix: 'hidden',
      input: 'w-full block p-8 border-b-1 border-dashed outline-none bg-tan focus:border-solid',
      inputWrapperSuffix: 'absolute h-45 bg-tan right-0 bottom-2 flex items-center px-8',
    },
    getSources({ query }) {
      return [
        {
          sourceId: 'main',
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: 'guest_list',
                  query,
                  params: {
                    hitsPerPage: 3,
                  },
                },
              ],
            })
          },
          templates: {
            item({ item, components, html }) {
              return html`<button
                class="w-full block px-8 py-5 text-20 leading-150 -tracking-1 text-left hover:bg-black hover:text-tan focus:bg-black focus:text-tan group [&_mark]:bg-transparent [&_mark]:text-current outline-none js-nameBtn"
                data-id="${item.objectID}"
              >
                ${components.Highlight({
                  hit: item,
                  attribute: 'name',
                })}
              </button>`
            },
          },
        },
      ]
    },
    renderNoResults({ state, render, html }, root) {
      render(
        html`<div class="text-20 leading-150 -tracking-1 p-8 border-x-1 border-b-1 rounded-b-7">
          No results for “${state.query}”
        </div>`,
        root,
      )
    },
  })

  del(panelContainer, '.js-nameBtn', 'click', async el => {
    setQuery(el.textContent)

    const sanityId = el.dataset.id

    const guest = await sanity.fetch(`*[_id == "${sanityId}"] {
      name,
      hasPlusOne,
    }`)

    console.log(guest)
  })

  on(document, 'keydown', ev => {
    if (ev.key === 'Escape') {
      setQuery('')
    }

    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
      ev.preventDefault()

      const delta = ev.key === 'ArrowDown' ? 1 : -1
      const tabbables = qsa('button:not([type="reset"]), input[type="search"]', node)
      const nextIndex = wrap(
        tabbables.findIndex(el => el === document.activeElement) + delta,
        tabbables.length,
      )

      const nextElement = tabbables[nextIndex]
      nextElement.focus()
    }
  })
})

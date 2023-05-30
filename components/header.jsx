import { h } from 'hyposcript'

export function Header(props) {
  return (
    <header class="fixed z-8 top-0 inset-x-0 h-72">
      <nav class="relative w-full h-full" data-component="anchor-nav">
        <div class="absolute right-[calc(50%+((10.9rem/2)+5rem))] top-20 flex gap-x-35 leading-100">
          <a data-component="link" class="p-5 js-links" href="#our-story">
            Our Story
          </a>
          <a data-component="link" class="p-5 js-links" href="#schedule">
            Schedule
          </a>
          <a data-component="link" class="p-5 js-links" href="#stay">
            Stay
          </a>
        </div>
        <a href="/" class="absolute top-7 left-1/2 -translate-x-1/2 overflow-hidden">
          <div class="sr-only">Go to top</div>
          <img class="w-109" src="/images/us.png" />
        </a>
        <div class="absolute left-[calc(50%+((10.9rem/2)+5rem))] top-20 flex gap-x-35 leading-100">
          <a data-component="link" class="p-5 js-links" href="#faq">
            FAQ
          </a>
          <a data-component="link" class="p-5 js-links" href="#our-registry">
            Our Registry
          </a>
          <a data-component="link" class="p-5 js-links" href="#rsvp">
            RSVP
          </a>
        </div>
      </nav>
    </header>
  )
}

import { h } from 'hyposcript'

export function Header(props) {
  return (
    <header class="fixed z-8 top-0 inset-x-0 h-72">
      <nav class="relative w-full h-full" data-component="nav">
        <button class="block l:hidden absolute top-20 left-15 p-5 z-2 js-menuToggle">
          <div class="js-menuText">Menu</div>
          <div class="absolute -translate-y-full invisible js-closeText">Close</div>
        </button>

        <div class="hidden l:flex absolute right-[calc(50%+((10.9rem/2)+5rem))] top-20 gap-x-35 leading-100">
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
        <a href="/" class="absolute top-7 left-1/2 -translate-x-1/2 overflow-hidden z-2">
          <div class="sr-only">Go to top</div>
          <img class="w-109" src="/images/us.png" />
        </a>
        <div class="hidden l:flex absolute left-[calc(50%+((10.9rem/2)+5rem))] top-20 gap-x-35 leading-100">
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

        <a class="block l:hidden absolute top-20 right-15 p-5 z-2 js-links" href="#rsvp">
          RSVP
        </a>

        <div class="l:hidden fixed inset-0 bg-blue-secondary z-1 px-15 pt-[var(--header-height)] flex flex-col justify-center text-40 2xs:text-50 text-center font-candy invisible js-menu">
          <a
            class="p-5 will-change-transform outline-none focus-visible:[-webkit-text-stroke-width:0.1rem] js-menuLinks"
            href="#our-story"
          >
            Our Story
          </a>
          <a
            class="p-5 will-change-transform outline-none focus-visible:[-webkit-text-stroke-width:0.1rem] js-menuLinks"
            href="#schedule"
          >
            Schedule
          </a>
          <a
            class="p-5 will-change-transform outline-none focus-visible:[-webkit-text-stroke-width:0.1rem] js-menuLinks"
            href="#stay"
          >
            Stay
          </a>
          <a
            class="p-5 will-change-transform outline-none focus-visible:[-webkit-text-stroke-width:0.1rem] js-menuLinks"
            href="#faq"
          >
            FAQ
          </a>
          <a
            class="p-5 will-change-transform outline-none focus-visible:[-webkit-text-stroke-width:0.1rem] js-menuLinks"
            href="#our-registry"
          >
            Our Registry
          </a>
          <a
            class="p-5 will-change-transform outline-none focus-visible:[-webkit-text-stroke-width:0.1rem] js-menuLinks"
            href="#rsvp"
          >
            RSVP
          </a>
        </div>
      </nav>
    </header>
  )
}

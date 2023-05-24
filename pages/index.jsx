import { h } from 'hyposcript'
import { Layout } from '../components/layout'
import classNames from 'classnames'
import escape from 'lodash.escape'

export function getStaticPaths() {
  return ['/']
}

export async function handler() {
  return (
    <Layout>
      <section class="mb-35">
        <div class="relative h-[calc(116vh+7.2rem)] overflow-hidden">
          <div
            class="absolute w-full h-full inset-0"
            data-component="parallax"
            data-parallax={escape(
              JSON.stringify({
                to: 25,
                start: 'top top',
                end: 'bottom top',
              }),
            )}
          >
            <img
              class="absolute w-full h-full inset-x-0 bottom-0 top-72 object-cover object-top opacity-0 transition-opacity duration-1000 ease-in-out"
              data-component="img"
              data-src="/images/hero.jpg"
              alt="The bride and groom"
            />
          </div>
          <h1
            class="relative top-[calc(100vh-7.2rem)] translate-y-[-90%] z-1 w-[100rem] mx-auto text-140 leading-123 tracking-0 text-tan text-center font-candy [-webkit-text-stroke-width:0.1rem]
          [-webkit-text-stroke-color:theme('colors.tan')] select-none"
          >
            Jenny & Mike’s Wedding Day!
          </h1>
        </div>
        <div class="notched w-[55rem] mx-auto -translate-y-115 bg-tan px-57 py-50 text-center italic text-25 space-y-15">
          <p>Saturday, September 23, 2023</p>
          <p>at Morris Arboretum of the University of Pennsylvania</p>
          <p>Philadelphia, PA</p>
        </div>
      </section>
      <section class="mb-160">
        <h2 class="text-50 text-center leading-100 font-candy mb-60">Our Story</h2>
        <div class="grid grid-cols-12 gap-x-40 px-50">
          <p class="col-start-3 col-end-11 text-45 leading-135">
            On a winter day in 2015, Jenny and Mike met in a design class at Northeastern
            University. During class, Jen noticed Mike staring at her while he was eating an
            avocado. Jen went home that night and told her roommates about the mysterious,
            mustachioed man giving her eyes while Mike ___________. A couple weeks later, Mike
            played a song for Jen while they were in line waiting for Subway.{' '}
          </p>
        </div>
      </section>
      <section class="mb-185">
        <div class="marquee py-50" data-component="marquee" data-speed="1.2">
          <div class="marquee-inner js-inner">
            <div class="marquee-el pl-150 js-el">
              <div class="flex items-center gap-x-150">
                {new Array(8)
                  .fill()
                  .map((_, i) => 2015 + i)
                  .map((year, i) => {
                    const isOdd = i % 2
                    return (
                      <div
                        class={classNames('bg-tan px-20 pt-20 rounded-7', {
                          'w-440 rotate-[10deg]': isOdd,
                          'w-540 rotate-[-10deg]': !isOdd,
                        })}
                      >
                        <div
                          class={classNames('bg-black rounded-40', {
                            'pt-[125%]': isOdd,
                            'pt-[80%]': !isOdd,
                          })}
                        ></div>
                        <h3 class="font-candy text-38 text-center leading-100 pt-30">{year}</h3>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-150">
        <h2 class="text-50 text-center leading-100 font-candy mb-78">Wedding Day Schedule</h2>
        <div class="grid grid-cols-12 gap-x-40 px-50">
          <div class="col-start-2 col-end-6 relative mb-100">
            <div class="text-33 leading-125 absolute right-full mr-25">♥</div>
            <h3 class="text-33 leading-125 mb-20">Welcome to the Arboretum</h3>
            <p class="leading-100 italic mb-15">5:00 pm – 5:45 pm</p>
            <p class="text-justify">
              Entry to Morris Arboretum begins at 5 pm. Free parking is available on site, and
              shuttles from the hotel will be arriving at 5:00 and 5:20. We’ll have the whole park
              to ourselves for the night, so feel free to explore the grounds while it’s still light
              out. Some of our favorite locations are the Rose Garden, Pennock Flower Walk, and the
              sculptures in Azalea Meadow.
            </p>
          </div>
          <div class="col-start-8 col-end-12 row-start-2 relative mb-170">
            <div class="text-33 leading-125 absolute right-full mr-25">♥</div>
            <h3 class="text-33 leading-125 mb-20">The Ceremony</h3>
            <p class="leading-100 italic mb-15">6:00 pm – 6:30 pm · Baxter Memorial</p>
            <p class="text-justify">
              Make your way over to Baxter Memorial for the I Do’s part of the night. Staff will be
              on-site to direct you to your seats. For anyone who may need assistance, golf carts
              and drivers will be available to transport to the ceremony location.
            </p>
          </div>
          <div class="col-start-3 col-end-7 row-start-3 relative mb-230">
            <div class="text-33 leading-125 absolute right-full mr-25">♥</div>
            <h3 class="text-33 leading-125 mb-20">Cocktail Hour</h3>
            <p class="leading-100 italic mb-15">6:30 pm – 7:30 pm · Out on a Limb</p>
            <p class="text-justify">
              Follow staff to our cocktail hour in the trees! Alcoholic and soft drinks will be
              available alongside passed appetizers. Grab a drink and hang out in the hammocks while
              catching up with friends and family.
            </p>
          </div>
          <div class="col-start-7 col-end-11 row-start-4 relative mb-285">
            <div class="text-33 leading-125 absolute right-full mr-25">♥</div>
            <h3 class="text-33 leading-125 mb-20">The Reception</h3>
            <p class="leading-100 italic mb-15">7:30 pm – 11:00 pm · Visitor’s Center Tent</p>
            <p class="text-justify">
              Join us for our wedding reception and continue the celebration with delicious food and
              refreshing drinks. We'll have a beautifully decorated space for you to relax, mingle,
              and dance the night away. Let's create unforgettable memories with friends and family!
            </p>
          </div>
          <div class="col-start-5 col-end-9 row-start-5 relative">
            <div class="text-33 leading-125 absolute right-full mr-25">♥</div>
            <h3 class="text-33 leading-125 mb-20">After Party</h3>
            <p class="leading-100 italic mb-15">11:00 pm – 1:00 am · Manayunk Brewing Co</p>
            <p class="text-justify">
              Follow staff to our cocktail hour in the trees! Alcoholic and soft drinks will be
              available alongside passed appetizers. Grab a drink and hang out in the hammocks while
              catching up with friends and family.
            </p>
          </div>
        </div>
      </section>
      <section class="mb-150">
        <img src="/images/divider.png" alt="" class="max-w-[370px] mx-auto" />
      </section>
      <section class="mb-285">
        <h2 class="text-50 text-center leading-100 font-candy mb-35">Your Stay in Philadelphia</h2>
        <p class="text-25 text-center max-w-[45rem] mx-auto mb-100">
          Make a weekend out of it! Here’s a list of places nearby, as well as some of our favorite
          Philly spots if you’re looking to explore.
        </p>
        <div class="grid grid-cols-12 gap-x-40 items-start px-50">
          <div class="col-span-6 rounded-r-7 h-[calc(100vh-9.2rem+1.4rem)] -ml-50 -mr-20 bg-gradient-to-b from-white to-black sticky top-[calc(7.2rem-0.7rem)]"></div>
          <div class="col-start-8 col-span-5">
            <div class="relative max-w-[45rem] pt-250">
              <div class="text-33 leading-125 absolute right-full mr-25">♥</div>
              <h3 class="text-33 leading-125 mb-25">Lodging</h3>
              <p class="mb-50">
                There will be shuttles with limited seating available from the Marriott Residence
                Inn in Bala Cynwyd to the event. We hope you can join us!
              </p>
              <a
                href="https://www.marriott.com/events/start.mi?id=1659021055198&key=GRP"
                target="_blank"
                rel="noopener noreferrer"
                data-component="link"
                class="inline-block px-35 py-14 leading-100 bg-tan border-1 rounded-full hover:bg-black hover:text-tan transition-colors duration-300 ease-in-out"
              >
                Book a Room
              </a>
            </div>
            <div class="relative pt-250">
              <div class="text-33 leading-125 absolute right-full mr-25">♥</div>
              <h3 class="text-33 leading-125 mb-25">Eat & Drink</h3>
              <ul class="mb-50 max-w-[52rem] columns-2 gap-80 leading-135 space-y-10">
                <li>Wm. Mulherin’s Sons</li>
                <li>Lark</li>
                <li>Middle Child</li>
                <li>LMNO</li>
                <li>Gilda</li>
                <li>Johnny Brenda's</li>
                <li>International Bar</li>
                <li>Martha</li>
                <li>Two Robbers</li>
                <li>Bok Bar</li>
              </ul>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                data-component="link"
                class="inline-block px-35 py-14 leading-100 bg-tan border-1 rounded-full hover:bg-black hover:text-tan transition-colors duration-300 ease-in-out"
              >
                Open Map
              </a>
            </div>
            <div class="relative pt-250 pb-300">
              <div class="text-33 leading-125 absolute right-full mr-25">♥</div>
              <h3 class="text-33 leading-125 mb-25">Things to Do</h3>
              <ul class="mb-50 max-w-[52rem] columns-2 gap-80 leading-135 space-y-10">
                <li>Philadelphia Museum of Art</li>
                <li>Franklin Institute</li>
                <li>Schuylkill River Trail</li>
                <li>Helium Comedy Club</li>
                <li>The Barnes Foundation</li>
                <li>Wissahickon</li>
                <li>Eastern State Penitentiary</li>
              </ul>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                data-component="link"
                class="inline-block px-35 py-14 leading-100 bg-tan border-1 rounded-full hover:bg-black hover:text-tan transition-colors duration-300 ease-in-out"
              >
                Open Map
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-215">
        <h2 class="text-50 text-center leading-100 font-candy mb-40">Frequently Asked Questions</h2>
        <div class="accordion" data-component="accordion">
          <button data-sqzbx-button>
            <h3>
              <div class="inline-block w-58 mr-40">♥</div>Lorem ipsum dolor sit amet
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <button data-sqzbx-button>
            <h3>
              <div class="inline-block w-58 mr-40">♥</div>Lorem ipsum dolor sit amet
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <button data-sqzbx-button>
            <h3>
              <div class="inline-block w-58 mr-40">♥</div>Lorem ipsum dolor sit amet
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>
      <section class="text-center mb-95">
        <h2 class="text-50 text-center leading-100 font-candy mb-35">Our Registry</h2>
        <p class="text-25 text-center max-w-[45rem] mx-auto mb-50">
          You know what they say—your presence is a gift! However, if you want to give us a present,
          we’re registered at Zola.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          data-component="link"
          class="inline-block px-35 py-14 leading-100 bg-tan border-1 rounded-full hover:bg-black hover:text-tan transition-colors duration-300 ease-in-out"
        >
          Give a Gift
        </a>
      </section>
      <section class="mb-235">
        <img src="/images/divider.png" alt="" class="max-w-[370px] mx-auto" />
      </section>
      <section class="px-50 mb-285">
        <div class="bg-tan max-w-[94.5rem] mx-auto rounded-7 [box-shadow:_0.7rem_0.7rem_0.9rem_theme('colors.blue-secondary')] px-50 py-60 h-[68.5rem] overflow-hidden flex flex-col">
          <h2 class="text-50 text-center leading-100 font-candy mb-35">RSVP</h2>
          <div class="flex-grow" data-component="form"></div>
        </div>
      </section>
      <footer class="text-center">
        <p class="font-candy text-196 leading-100">Jenny & Mike</p>
        <p class="italic">Website by the Bride & Groom ♥</p>
      </footer>
    </Layout>
  )
}

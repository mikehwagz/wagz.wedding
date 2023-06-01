import { h } from 'hyposcript'
import { Layout } from '../components/layout'
import classNames from 'classnames'
import escape from 'lodash.escape'
import gsap from 'gsap'

export function getStaticPaths() {
  return ['/']
}

export async function handler() {
  return (
    <Layout>
      <section class="mb-35">
        <div class="relative h-[calc(116vh+var(--header-height))] overflow-hidden">
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
              class="absolute w-full h-full inset-x-0 bottom-0 top-[var(--header-height)] object-cover object-top opacity-0 transition-opacity duration-1000 ease-in-out"
              data-component="img"
              data-src="/images/hero.jpg"
              alt="The bride and groom"
            />
          </div>
          <h1
            class="relative top-[calc(100vh-var(--header-height))] translate-y-[-90%] z-1 w-[100rem] mx-auto text-140 leading-123 tracking-0 text-tan text-center font-candy [-webkit-text-stroke-width:0.1rem]
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
      <section class="mb-160" id="our-story">
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
                        class={classNames(
                          'bg-tan px-20 pt-20 rounded-7',
                          gsap.utils.wrap(['w-540', 'w-440', 'w-440'], i),
                          {
                            'rotate-[10deg]': isOdd,
                            'rotate-[-10deg]': !isOdd,
                          },
                        )}
                      >
                        <div
                          class={classNames(
                            'relative bg-black rounded-40 overflow-hidden',
                            gsap.utils.wrap(['pt-[80%]', 'pt-[125%]', 'pt-[125%]'], i),
                          )}
                        >
                          <img
                            class="absolute w-full h-full inset-0 object-cover"
                            data-component="img"
                            data-src={`/images/${year}.png`}
                            alt={`Jenny and Mike in ${year}`}
                          />
                        </div>
                        <h3 class="font-candy text-38 text-center leading-100 pt-30">{year}</h3>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-150" id="schedule">
        <h2 class="text-50 text-center leading-100 font-candy mb-78">Wedding Day Schedule</h2>
        <div class="grid grid-cols-12 gap-x-40 px-50" data-component="schedule">
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
          <div class="col-start-6 col-end-9 pt-25 pb-40">
            <svg viewBox="0 0 331 405" fill="none">
              <path
                d="M1 1C34.4731 1 63.8998 12.608 91.5977 28.5167C111.504 39.95 132.295 49.3715 149.422 64.1265C174.24 85.5084 190.474 108.246 206.202 135.346C230.24 176.766 254.03 226.942 244.821 274.548C237.371 313.059 191.919 360.336 143.785 360.336C137.546 360.336 128.102 362.306 124.998 356.289C122.937 352.295 121.24 346.954 121.24 342.531C121.24 332.429 128.328 325.094 136.27 318.251C146.361 309.558 166.076 307.242 179.482 306.921C196.016 306.525 209.023 308.991 223.111 316.633C257.99 335.553 330 369.476 330 404"
                stroke="black"
                stroke-linecap="round"
                class="js-paths"
              />
            </svg>
          </div>
          <div class="col-start-2 col-end-8 pt-15 pb-20 pr-40">
            <svg viewBox="0 0 660 415" fill="none">
              <path
                d="M659 11.5292C647.809 11.5292 634.726 5.1837 623.835 2.22182C612.102 -0.969141 596.637 2.54713 586.226 7.50197C561.193 19.4155 548.303 57.5882 543.915 81.6031C524.85 185.944 384.012 217.422 293.436 183.895C247.773 166.992 200.919 153.752 151.649 153.288C137.102 153.151 120.585 151.282 106.893 156.868C91.1275 163.299 78.2916 173.437 64.7707 183.089C41.2748 199.862 24.2379 213.342 11.1772 238.665C3.53501 253.483 2.33899 272.347 2.33899 288.603C2.33899 304.122 -1.17658 323.595 3.1852 338.541C6.42534 349.643 10.6077 360.243 14.5621 371.116C17.5262 379.267 40.6422 408.514 47.9774 414"
                stroke="black"
                stroke-linecap="round"
                class="js-paths"
              />
            </svg>
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
          <div class="col-start-5 col-end-12 row-start-3 pt-25 px-25">
            <svg viewBox="0 0 773 457" fill="none">
              <path
                d="M1 1C62.0354 1 123.071 1 184.106 1C214.615 1 245.129 2.14595 275.31 6.55689C313.304 12.1097 356.868 18.1503 390.246 36.1936C416.007 50.1198 431.862 74.7746 409.208 97.3194C383.753 122.651 347.829 125.15 317.306 142.701C308.2 147.937 298.344 152.167 298.344 162.561C298.344 174.804 306.483 180.316 317.19 187.156C335.109 198.604 358.415 204.515 380.474 204.753C395.008 204.909 409.616 205.136 423.982 202.9C446.457 199.403 466.819 189.083 487.848 181.702C524.837 168.718 557.735 156.937 598.247 156.593C627.855 156.341 663.94 151.841 691.894 162.253C727.772 175.616 750.175 197.935 764.252 229.759C773.872 251.504 778.237 281.674 754.829 297.779C709.785 328.77 652.454 328.856 597.316 328.856C526.193 328.856 455.712 321.447 384.662 321.447C330.769 321.447 276.85 321.002 222.961 321.447C152.627 322.029 91.2772 338.255 32.8749 373.312C16.2261 383.305 8.15822 391.246 8.86735 407.555C9.45921 421.168 40.5156 433.73 51.2553 437.73C70.8227 445.018 131.885 456 142.121 456"
                stroke="black"
                stroke-linecap="round"
                class="js-paths"
              />
            </svg>
          </div>
          <div class="col-start-2 col-end-7 row-start-4 pt-65 pr-40 pl-25">
            <svg viewBox="0 0 512 469" fill="none">
              <path
                d="M511 1C506.966 1.22407 504.002 3.21664 500.558 5.14497C494.297 8.65029 487.061 10.2029 480.595 13.4349C461.045 23.2069 441.235 32.5475 421.09 41.068C396.352 51.5312 369.816 63.2667 343.772 69.7758C325.537 74.3334 302.949 78.452 284.651 72.8462C268.322 67.8434 262.953 40.5008 274.747 28.7099C279.534 23.9236 288.012 20.3432 294.633 20.3432C302.392 20.3432 305.442 25.9939 308.53 32.8549C324.328 67.9508 291.463 100.461 270.524 125.349C232.921 170.042 176.204 200.516 118.191 208.249C85.1163 212.657 48.7334 212.752 41.8718 173.554C38.6481 155.138 43.2233 140.55 54.9244 126.193C61.4076 118.239 69.8756 110.578 79.8781 108.078C87.5388 106.164 98.578 103.844 106.06 107.388C118.517 113.287 125.626 129.2 128.173 141.929C133.393 168.021 127.617 195.265 119.19 219.916C108.711 250.565 96.5108 281.265 81.1065 309.8C70.4729 329.498 57.1893 347.498 41.104 362.994C34.65 369.212 23.4085 378.922 13.463 376.504C0.818606 373.429 0.895258 356.935 1.02459 346.721C1.27852 326.666 17.8517 310.535 35.5758 303.89C65.8806 292.529 103.077 299.405 130.937 313.331C159.91 327.813 178.201 351.06 197.275 376.197C213.671 397.804 229.02 420.189 245.34 441.748C253.608 452.671 263.309 468 278.816 468"
                stroke="black"
                stroke-linecap="round"
                class="js-paths"
              />
            </svg>
          </div>
          <div class="col-start-7 col-end-11 row-start-4 relative">
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
      <section class="mb-285" id="stay">
        <h2 class="text-50 text-center leading-100 font-candy mb-35">Your Stay in Philadelphia</h2>
        <p class="text-25 text-center max-w-[45rem] mx-auto mb-100">
          Make a weekend out of it! Here’s a list of places nearby, as well as some of our favorite
          Philly spots if you’re looking to explore.
        </p>
        <div class="grid grid-cols-12 gap-x-40 items-start px-50">
          <div class="col-span-6 rounded-r-7 h-[calc(100vh-9.2rem+1.4rem)] -ml-50 -mr-20 sticky top-[calc(var(--header-height)-0.7rem)] overflow-hidden">
            <div class="relative w-full h-full">
              <img
                data-component="img"
                data-src="/images/stay.png"
                alt=""
                class="absolute w-full h-full object-cover"
              />
            </div>
          </div>
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
      <section class="mb-215" id="faq">
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
      <section class="text-center mb-95" id="our-registry">
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
      <section class="px-50 mb-285" id="rsvp">
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

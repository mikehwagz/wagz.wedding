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
      <section class="m:mb-35">
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
            class="relative top-[calc(100vh-var(--header-height))] translate-y-[-80%] m:translate-y-[-90%] z-1 max-w-[100rem] l:max-w-[1000px] mx-auto text-35 2xs:text-[clamp(40px,calc(140/1536*100vw),140px)] leading-123 tracking-0 text-tan text-center font-candy [-webkit-text-stroke-width:0.1rem]
          [-webkit-text-stroke-color:theme('colors.tan')] select-none"
          >
            Jenny & Mike’s Wedding Day!
          </h1>
        </div>
        <div class="px-10">
          <div class="notched [--notch-size:2rem] m:[--notch-size:5.7rem] max-w-[55rem] mx-auto -translate-y-115 bg-tan px-20 m:px-57 py-15 m:py-50 text-center italic text-18 m:text-25 space-y-10 m:space-y-15">
            <p>
              Saturday,{` `}
              <br class="s:hidden" />
              September 23, 2023
            </p>
            <p>at Morris Arboretum of the University of Pennsylvania</p>
            <p>Philadelphia, PA</p>
          </div>
        </div>
      </section>
      <section class="mb-80 m:mb-160" id="our-story">
        <h2 class="text-28 m:text-50 text-center leading-150 font-candy mb-20">Our Story</h2>
        <div class="px-25 s:px-50">
          <div class="story mx-auto text-[clamp(18px,calc(45/1536*100vw),45px)] leading-135 text-justify space-y-30">
            <p class="indent-[10%]">
              Jenny and Mike met in a design course back in 2015 while attending college in Boston.
              Mike had seen Jenny around campus and he’d be lying if he told you he wasn’t excited
              to be in her class. Jenny had no idea who he was. During a studio snack break, Mike
              was eating an avocado with a spoon (it was a weird phase) and unintentionally staring
              at Jen. Later that night she told her roommates about the mysterious, mustachioed man
              who was making eyes at her. She was intrigued.
            </p>
            <p>
              The following week, Mike approached Jen while she was waiting in line at the Subway™️
              on campus. Mike had randomly been listening to “You Get What You Give” by The New
              Radicals on repeat that week, so he decided to play it over his phone while she waited
              for her tuna sub. Jen recognized the song and so did the Subway™ employee making her
              sandwich.
            </p>
            <p>
              Jenny and Mike ended up eating together and immediately clicked. The rest was history.
              They finished college, moved to Philly, started a design studio together, and adopted
              their beloved pup, Greta Marie. To this day, Subway™ and that song by The New Radicals
              holds a special place in their hearts.
            </p>
          </div>
        </div>
      </section>
      <section class="mb-80">
        <div class="marquee py-50" data-component="marquee" data-speed="1.2">
          <div class="marquee-inner js-inner">
            <div class="marquee-el pl-75 m:pl-150 js-el">
              <div class="flex items-center gap-x-75 m:gap-x-150">
                {new Array(8)
                  .fill()
                  .map((_, i) => 2015 + i)
                  .map((year, i) => {
                    const isOdd = i % 2
                    return (
                      <div
                        class={classNames(
                          'bg-tan px-10 m:px-20 pt-10 m:pt-20 rounded-7',
                          gsap.utils.wrap(['w-270 m:w-540', 'w-220 m:w-440', 'w-220 m:w-440'], i),
                          {
                            'rotate-[10deg]': isOdd,
                            'rotate-[-10deg]': !isOdd,
                          },
                        )}
                      >
                        <div
                          class={classNames(
                            'relative bg-black rounded-20 m:rounded-40 overflow-hidden',
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
      <section class="mb-80 m:mb-150 m:pt-200" id="schedule">
        <h2 class="text-28 m:text-50 text-center leading-150 font-candy mb-50 m:mb-80">
          Wedding Day Schedule
        </h2>
        <div class="grid grid-cols-12 m:gap-x-40 px-25 s:px-50" data-component="schedule">
          <div class="col-start-1 m:col-start-2 col-end-13 600:col-end-10 m:col-end-8 l:col-end-6 relative mb-80 600:mb-100">
            <div class="hidden 600:block text-25 l:text-33 leading-125 absolute right-full mr-15 m:mr-25">
              ♥
            </div>
            <h3 class="text-25 l:text-33 leading-125 mb-15 m:mb-20">Welcome to the Arboretum</h3>
            <p class="text-16 m:text-20 leading-120 italic mb-15">5:00 pm – 5:30 pm</p>
            <p class="text-justify">
              Entry to Morris Arboretum begins at 5 pm. Free parking is available on site. There
              will also be two shuttle busses from the hotel. We’ll have the whole park to ourselves
              for the night, so feel free to explore the grounds while it’s still light out. Some of
              our favorite locations are the Rose Garden, Pennock Flower Walk, and the sculptures in
              Azalea Meadow.
            </p>
          </div>
          <div class="svg-wrapper col-start-6 col-end-9 pt-25 pb-40">
            <svg viewBox="0 0 331 405" fill="none">
              <path
                d="M1 1C34.4731 1 63.8998 12.608 91.5977 28.5167C111.504 39.95 132.295 49.3715 149.422 64.1265C174.24 85.5084 190.474 108.246 206.202 135.346C230.24 176.766 254.03 226.942 244.821 274.548C237.371 313.059 191.919 360.336 143.785 360.336C137.546 360.336 128.102 362.306 124.998 356.289C122.937 352.295 121.24 346.954 121.24 342.531C121.24 332.429 128.328 325.094 136.27 318.251C146.361 309.558 166.076 307.242 179.482 306.921C196.016 306.525 209.023 308.991 223.111 316.633C257.99 335.553 330 369.476 330 404"
                stroke="black"
                stroke-linecap="round"
                class="js-paths"
              />
            </svg>
          </div>
          <div class="svg-wrapper col-start-2 col-end-8 pt-15 pb-20 pr-40">
            <svg viewBox="0 0 660 415" fill="none">
              <path
                d="M659 11.5292C647.809 11.5292 634.726 5.1837 623.835 2.22182C612.102 -0.969141 596.637 2.54713 586.226 7.50197C561.193 19.4155 548.303 57.5882 543.915 81.6031C524.85 185.944 384.012 217.422 293.436 183.895C247.773 166.992 200.919 153.752 151.649 153.288C137.102 153.151 120.585 151.282 106.893 156.868C91.1275 163.299 78.2916 173.437 64.7707 183.089C41.2748 199.862 24.2379 213.342 11.1772 238.665C3.53501 253.483 2.33899 272.347 2.33899 288.603C2.33899 304.122 -1.17658 323.595 3.1852 338.541C6.42534 349.643 10.6077 360.243 14.5621 371.116C17.5262 379.267 40.6422 408.514 47.9774 414"
                stroke="black"
                stroke-linecap="round"
                class="js-paths"
              />
            </svg>
          </div>
          <div class="col-start-1 600:col-start-4 m:col-start-6 l:col-start-8 col-end-13 m:col-end-12 row-start-2 relative mb-80 600:mb-100 l:mb-170">
            <div class="hidden 600:block text-25 l:text-33 leading-125 absolute right-full mr-15 m:mr-25">
              ♥
            </div>
            <h3 class="text-25 l:text-33 leading-125 mb-15 m:mb-20">The Ceremony</h3>
            <p class="text-16 m:text-20 leading-120 italic mb-15">
              5:45 pm – 6:30 pm<span class="hidden s:inline"> · </span>
              <br class="s:hidden" />
              Baxter Memorial
            </p>
            <p class="text-justify">
              Make your way over to Baxter Memorial for the I Do’s part of the night. Staff will be
              on site to direct you to your seats. For anyone who may need assistance, golf carts
              and drivers will be available to transport to the ceremony location.
            </p>
          </div>
          <div class="col-start-1 600:col-start-2 m:col-start-3 col-end-13 600:col-end-11 m:col-end-9 l:col-end-7 row-start-3 relative mb-80 600:mb-120 l:mb-230">
            <div class="hidden 600:block text-25 l:text-33 leading-125 absolute right-full mr-15 m:mr-25">
              ♥
            </div>
            <h3 class="text-25 l:text-33 leading-125 mb-15 m:mb-20">Cocktail Hour</h3>
            <p class="text-16 m:text-20 leading-120 italic mb-15">
              6:30 pm – 7:30 pm<span class="hidden s:inline"> · </span>
              <br class="s:hidden" />
              Out on a Limb
            </p>
            <p class="text-justify">
              Follow staff to our cocktail hour in the trees! Hard and soft drinks will be available
              alongside passed appetizers. Grab a drink and hang out in the hammocks while catching
              up with friends and family.
            </p>
          </div>
          <div class="svg-wrapper col-start-5 col-end-12 row-start-3 pt-25 px-25">
            <svg viewBox="0 0 773 457" fill="none">
              <path
                d="M1 1C62.0354 1 123.071 1 184.106 1C214.615 1 245.129 2.14595 275.31 6.55689C313.304 12.1097 356.868 18.1503 390.246 36.1936C416.007 50.1198 431.862 74.7746 409.208 97.3194C383.753 122.651 347.829 125.15 317.306 142.701C308.2 147.937 298.344 152.167 298.344 162.561C298.344 174.804 306.483 180.316 317.19 187.156C335.109 198.604 358.415 204.515 380.474 204.753C395.008 204.909 409.616 205.136 423.982 202.9C446.457 199.403 466.819 189.083 487.848 181.702C524.837 168.718 557.735 156.937 598.247 156.593C627.855 156.341 663.94 151.841 691.894 162.253C727.772 175.616 750.175 197.935 764.252 229.759C773.872 251.504 778.237 281.674 754.829 297.779C709.785 328.77 652.454 328.856 597.316 328.856C526.193 328.856 455.712 321.447 384.662 321.447C330.769 321.447 276.85 321.002 222.961 321.447C152.627 322.029 91.2772 338.255 32.8749 373.312C16.2261 383.305 8.15822 391.246 8.86735 407.555C9.45921 421.168 40.5156 433.73 51.2553 437.73C70.8227 445.018 131.885 456 142.121 456"
                stroke="black"
                stroke-linecap="round"
                class="js-paths"
              />
            </svg>
          </div>
          <div class="svg-wrapper col-start-2 col-end-7 row-start-4 pt-65 pr-40 pl-25">
            <svg viewBox="0 0 512 469" fill="none">
              <path
                d="M511 1C506.966 1.22407 504.002 3.21664 500.558 5.14497C494.297 8.65029 487.061 10.2029 480.595 13.4349C461.045 23.2069 441.235 32.5475 421.09 41.068C396.352 51.5312 369.816 63.2667 343.772 69.7758C325.537 74.3334 302.949 78.452 284.651 72.8462C268.322 67.8434 262.953 40.5008 274.747 28.7099C279.534 23.9236 288.012 20.3432 294.633 20.3432C302.392 20.3432 305.442 25.9939 308.53 32.8549C324.328 67.9508 291.463 100.461 270.524 125.349C232.921 170.042 176.204 200.516 118.191 208.249C85.1163 212.657 48.7334 212.752 41.8718 173.554C38.6481 155.138 43.2233 140.55 54.9244 126.193C61.4076 118.239 69.8756 110.578 79.8781 108.078C87.5388 106.164 98.578 103.844 106.06 107.388C118.517 113.287 125.626 129.2 128.173 141.929C133.393 168.021 127.617 195.265 119.19 219.916C108.711 250.565 96.5108 281.265 81.1065 309.8C70.4729 329.498 57.1893 347.498 41.104 362.994C34.65 369.212 23.4085 378.922 13.463 376.504C0.818606 373.429 0.895258 356.935 1.02459 346.721C1.27852 326.666 17.8517 310.535 35.5758 303.89C65.8806 292.529 103.077 299.405 130.937 313.331C159.91 327.813 178.201 351.06 197.275 376.197C213.671 397.804 229.02 420.189 245.34 441.748C253.608 452.671 263.309 468 278.816 468"
                stroke="black"
                stroke-linecap="round"
                class="js-paths"
              />
            </svg>
          </div>
          <div class="col-start-1 600:col-start-4 m:col-start-5 l:col-start-7 col-end-13 m:col-end-11 row-start-4 relative mb-80 600:mb-120 l:mb-0">
            <div class="hidden 600:block text-25 l:text-33 leading-125 absolute right-full mr-15 m:mr-25">
              ♥
            </div>
            <h3 class="text-25 l:text-33 leading-125 mb-15 m:mb-20">The Reception</h3>
            <p class="text-16 m:text-20 leading-120 italic mb-15">
              7:30 pm – 11:00 pm<span class="hidden s:inline"> · </span>
              <br class="s:hidden" />
              Visitor’s Center Tent
            </p>
            <p class="text-justify">
              And now for the main event. Head to the tent for our reception and continue the
              celebration with dinner, drinks, and dancing. We can't wait to party with all of you!
            </p>
          </div>
          <div class="col-start-1 600:col-start-2 m:col-start-3 l:col-start-5 col-end-13 600:col-end-11 m:col-end-9 row-start-5 relative">
            <div class="hidden 600:block text-25 l:text-33 leading-125 absolute right-full mr-15 m:mr-25">
              ♥
            </div>
            <h3 class="text-25 l:text-33 leading-125 mb-15 m:mb-20">After Party</h3>
            <p class="text-16 m:text-20 leading-120 italic mb-15">
              11:00 pm – 1:00 am<span class="hidden s:inline"> · </span>
              <br class="s:hidden" />
              Manayunk Brewing Co
            </p>
            <p class="text-justify">
              After the reception, we'll be heading back toward the hotel to Manayunk Brewing Co for
              an after party. There will be a shuttle available from the reception to the after
              party. Let's keep the party going!
            </p>
          </div>
        </div>
      </section>
      <section class="mb-100 m:mb-150 px-50">
        <img src="/images/divider.png" alt="" class="w-full max-w-[370px] mx-auto" />
      </section>
      <section class="mb-100 m:mb-285" id="stay">
        <div class="px-30 mb-80 m:mb-100">
          <h2 class="text-28 m:text-50 text-center leading-150 font-candy mb-20">
            Your Stay in Philadelphia
          </h2>
          <p class="text-18 m:text-25 text-center max-w-[45rem] mx-auto">
            Make a weekend out of it! Here’s a list of places nearby, as well as some of our
            favorite Philly spots if you’re looking to explore.
          </p>
        </div>
        <div class="grid grid-cols-12 m:gap-x-40 items-start px-15 m:px-30 l:px-50">
          <div class="hidden m:block col-span-6 rounded-r-7 h-[calc(100vh-9.2rem+1.4rem)] -ml-50 -mr-20 sticky top-[calc(var(--header-height)-0.7rem)] overflow-hidden">
            <div class="relative w-full h-full">
              <img
                data-component="img"
                data-src="/images/stay.png"
                alt=""
                class="absolute w-full h-full object-cover"
              />
            </div>
          </div>

          <div class="col-start-1 m:col-start-8 col-span-12 m:col-span-5 m:py-150 space-y-80 m:space-y-100">
            <div class="relative max-w-[45rem]">
              <div class="hidden l:block text-25 m:text-33 leading-125 absolute right-full mr-25">
                ♥
              </div>
              <h3 class="text-25 l:text-33 leading-125 mb-20 m:mb-25">Lodging</h3>
              <p class="mb-30 m:mb-50">
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
            <div class="relative max-w-[45rem]">
              <div class="hidden l:block text-25 l:text-33 leading-125 absolute right-full mr-25">
                ♥
              </div>
              <h3 class="text-25 l:text-33 leading-125 mb-20 m:mb-25">Eat & Drink</h3>
              <p class="mb-30 m:mb-50">
                Wm. Mulherin’s Sons, Lark, Middle Child, LMNO, Gilda, Johnny Brenda's, International
                Bar, Martha, Two Robbers, Bok Bar
              </p>
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
            <div class="relative max-w-[45rem]">
              <div class="hidden l:block text-25 l:text-33 leading-125 absolute right-full mr-25">
                ♥
              </div>
              <h3 class="text-25 l:text-33 leading-125 mb-20 m:mb-25">Things to Do</h3>
              <p class="mb-30 m:mb-50">
                Philadelphia Museum of Art, Franklin Institute, Schuylkill River Trail, Helium
                Comedy Club, The Barnes Foundation, Wissahickon, Eastern State Penitentiary
              </p>
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
      <section class="mb-100 m:mb-215" id="faq">
        <h2 class="text-28 m:text-50 text-center leading-150 font-candy mb-20">
          Frequently Asked Questions
        </h2>
        <div class="accordion" data-component="accordion">
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40">♥</div>What is the dress code?
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
              <div class="hidden m:inline-block w-58 mr-40">♥</div>Is there parking available at the
              wedding venue?
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
              <div class="hidden m:inline-block w-58 mr-40">♥</div>Is the venue wheelchair
              accessible?
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
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40">♥</div>When should I RSVP by?
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
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40">♥</div>Can I take photos?
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
      <section class="text-center mb-95 px-30" id="our-registry">
        <h2 class="text-28 m:text-50 text-center leading-150 font-candy mb-20">Our Registry</h2>
        <p class="text-18 m:text-25 text-center max-w-[45rem] mx-auto mb-50">
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
      <section class="mb-100 m:mb-235 px-50">
        <img src="/images/divider.png" alt="" class="w-full max-w-[370px] mx-auto" />
      </section>
      <section class="px-10 m:px-50 mb-100 m:mb-285" id="rsvp">
        <div class="bg-tan max-w-[94.5rem] mx-auto rounded-7 [box-shadow:_0.7rem_0.7rem_0.9rem_theme('colors.blue-secondary')] px-20 m:px-50 py-60 m:min-h-[68.5rem] flex flex-col">
          <h2 class="text-28 m:text-50 text-center leading-150 font-candy mb-20">RSVP</h2>
          <div class="flex-grow" data-component="form"></div>
        </div>
      </section>
      <footer class="text-center pb-30 l:pb-30">
        <p class="font-candy text-35 2xs:text-[clamp(40px,calc(196/1536*100vw),196px)] mb-8 l:mb-0 leading-100">
          Jenny & Mike
        </p>
        <p class="text-14 m:text-20 italic">Website by the Bride & Groom ♥</p>
      </footer>
    </Layout>
  )
}

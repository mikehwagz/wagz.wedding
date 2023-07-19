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
      <section class="mb-100 landscape:mb-35">
        <div class="relative h-[calc(var(--svh)-var(--frame-padding))] landscape:h-[calc(116vh+var(--header-height))] overflow-hidden">
          <div
            class="absolute w-full h-full inset-0 pt-[var(--header-height)]"
            data-component="parallax"
            data-parallax={escape(
              JSON.stringify({
                to: 25,
                start: 'top top',
                end: 'bottom top',
              }),
            )}
          >
            <div class="relative w-full h-full">
              <img
                class="hidden landscape:block absolute w-full h-full inset-0 object-cover object-top opacity-0 transition-opacity duration-1000 ease-in-out"
                data-component="img"
                data-src="/images/hero.jpg"
                alt="The bride and groom"
              />
              <img
                class="hidden portrait:block absolute w-full h-full inset-0 object-cover object-bottom opacity-0 transition-opacity duration-1000 ease-in-out"
                data-component="img"
                data-src="/images/hero-mobile.jpg"
                alt="The bride and groom"
              />
            </div>
          </div>
          <h1
            class="relative top-[calc(var(--svh)-var(--header-height))] translate-y-[-80%] m:translate-y-[-90%] z-1 max-w-[100rem] l:max-w-[1000px] mx-auto text-[clamp(35px,calc(45/375*100vw),45px)] xs:text-[clamp(45px,calc(140/1536*100vw),140px)] leading-123 tracking-0 text-tan text-center font-candy [-webkit-text-stroke-width:0.1rem]
          [-webkit-text-stroke-color:theme('colors.tan')] select-none"
          >
            Jenny & Mike’s Wedding Day!
          </h1>
        </div>
        <div class="px-10 pt-15 landscape:pt-0">
          <div class="notched [--notch-size:3rem] m:[--notch-size:5.7rem] max-w-[55rem] mx-auto landscape:-translate-y-115 bg-tan px-20 m:px-57 py-30 m:py-50 text-center italic text-18 m:text-25 space-y-10 m:space-y-15">
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
      <section class="mb-60 m:mb-160" id="our-story">
        <h2 class="h2 mb-20">Our Story</h2>
        <div class="px-25 s:px-50">
          <div class="story mx-auto text-[clamp(18px,calc(45/1536*100vw),45px)] leading-140 s:leading-135 space-y-20 s:space-y-30">
            <p class="indent-[10%]">
              Jennifer Heintz and Mike Wagenheim met in a design course in 2015 while attending
              college in Boston. During a studio snack break, Mike was eating an avocado with a
              spoon (it was a weird phase) and staring at Jen. Later that night she told her
              roommates about the mustachioed man who was making eyes at her. She was intrigued.
            </p>
            <p>
              The following week, Mike approached Jen in line at the Subway™ on campus. Mike was
              listening to “You Get What You Give” by The New Radicals on repeat that week, so he
              decided to play it over his phone while they waited in line. Jen recognized the song
              and so did the Subway™ employee making her tuna sub.
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
      <section class="mb-60 m:mb-80">
        <div class="marquee py-50" data-component="marquee" data-speed="0.8">
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
        <h2 class="h2 px-10 mb-30 s:mb-50 m:mb-80">Wedding Day Schedule</h2>
        <div class="grid grid-cols-12 m:gap-x-40 px-25 s:px-50" data-component="schedule">
          <div class="col-start-1 m:col-start-2 col-end-13 600:col-end-10 m:col-end-8 l:col-end-6 relative mb-60 600:mb-100">
            <div class="hidden 600:block h3 absolute right-full mr-15 m:mr-25">♥</div>
            <h3 class="h3 mb-15 m:mb-20">Welcome to the Arboretum</h3>
            <p class="text-16 m:text-20 leading-125 italic mb-15">Arrive by 5:30 pm</p>
            <p>
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
          <div class="col-start-1 600:col-start-4 m:col-start-6 l:col-start-8 col-end-13 m:col-end-12 row-start-2 relative mb-60 600:mb-100 l:mb-170">
            <div class="hidden 600:block h3 absolute right-full mr-15 m:mr-25">♥</div>
            <h3 class="h3 mb-15 m:mb-20">The Ceremony</h3>
            <p class="text-16 m:text-20 leading-125 italic mb-15">
              6:00 pm – 6:30 pm<span class="hidden xl:inline"> · </span>
              <br class="xl:hidden" />
              Baxter Memorial
            </p>
            <p>
              Make your way over to Baxter Memorial for the I Do’s part of the night. Staff will be
              on site to direct you to your seats. For anyone who may need assistance, golf carts
              and drivers will be available to transport to the ceremony location.
            </p>
          </div>
          <div class="col-start-1 600:col-start-2 m:col-start-3 col-end-13 600:col-end-11 m:col-end-9 l:col-end-7 row-start-3 relative mb-60 600:mb-120 l:mb-230">
            <div class="hidden 600:block h3 absolute right-full mr-15 m:mr-25">♥</div>
            <h3 class="h3 mb-15 m:mb-20">Cocktail Hour</h3>
            <p class="text-16 m:text-20 leading-125 italic mb-15">
              6:30 pm – 7:30 pm<span class="hidden xl:inline"> · </span>
              <br class="xl:hidden" />
              Out on a Limb
            </p>
            <p>
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
          <div class="col-start-1 600:col-start-4 m:col-start-5 l:col-start-7 col-end-13 m:col-end-11 row-start-4 relative mb-60 600:mb-120 l:mb-0">
            <div class="hidden 600:block h3 absolute right-full mr-15 m:mr-25">♥</div>
            <h3 class="h3 mb-15 m:mb-20">The Reception</h3>
            <p class="text-16 m:text-20 leading-125 italic mb-15">
              7:30 pm – 11:00 pm<span class="hidden xl:inline"> · </span>
              <br class="xl:hidden" />
              Visitor’s Center Tent
            </p>
            <p>
              And now for the main event. Head to the tent for our reception and continue the
              celebration with dinner, drinks, and dancing. We can't wait to party with all of you!
            </p>
          </div>
          <div class="col-start-1 600:col-start-2 m:col-start-3 l:col-start-5 col-end-13 600:col-end-11 m:col-end-9 row-start-5 relative">
            <div class="hidden 600:block h3 absolute right-full mr-15 m:mr-25">♥</div>
            <h3 class="h3 mb-15 m:mb-20">After Party</h3>
            <p class="text-16 m:text-20 leading-125 italic mb-15">
              11:00 pm – Late<span class="hidden xl:inline"> · </span>
              <br class="xl:hidden" />
              Manayunk Brewing
            </p>
            <p>
              After the reception, we'll be heading back toward the hotel to Manayunk Brewing Co for
              a low-key, nothing fancy after party. There will be a shuttle available from the
              reception to the brewery, on the main street of Manayunk. Let's keep the party going!
            </p>
          </div>
        </div>
      </section>
      <section class="mb-80 m:mb-150 px-50">
        <img src="/images/divider.png" alt="" class="w-full max-w-[370px] mx-auto" />
      </section>
      <section class="mb-100 m:mb-285" id="stay">
        <div class="px-30 mb-60 m:mb-100">
          <h2 class="h2 mb-10 s:mb-20">Your Stay in Philadelphia</h2>
          <p class="text-18 m:text-25 text-center max-w-[45rem] mx-auto">
            Make a weekend out of it! Here’s a list of places nearby, as well as some of our
            favorite Philly spots if you’re looking to explore.
          </p>
        </div>
        <div class="grid grid-cols-12 m:gap-x-40 items-start px-15 m:px-30 l:px-50">
          <div class="col-span-12 m:col-span-6 rounded-7 m:rounded-r-7 m:rounded-l-0 mb-60 m:mb-0 m:-ml-50 m:-mr-20 m:sticky m:top-[calc(var(--header-height)-0.7rem)] overflow-hidden">
            <div class="relative w-full m:h-[calc(100vh-9.2rem+1.4rem)] pt-[125%] m:pt-0">
              <img
                data-component="img"
                data-src="/images/stay.png"
                alt=""
                class="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div class="col-start-1 m:col-start-8 col-span-12 m:col-span-5 m:py-150 space-y-60 s:space-y-80 m:space-y-100">
            <div class="relative max-w-[45rem]">
              <div class="hidden l:block text-25 m:text-33 leading-125 absolute right-full mr-25">
                ♥
              </div>
              <h3 class="h3 mb-20 m:mb-25">Lodging</h3>
              <p class="mb-30 m:mb-50">
                There will be shuttles with limited seating available from the Marriott Residence
                Inn in Bala Cynwyd to the event and back.
              </p>
              <a
                href="https://www.marriott.com/en-us/hotels/phlrb-residence-inn-philadelphia-bala-cynwyd/overview/"
                target="_blank"
                rel="noopener noreferrer"
                data-component="link"
                class="inline-block px-35 py-14 leading-100 bg-tan border-1 rounded-full hover:bg-black hover:text-tan transition-colors duration-300 ease-in-out"
              >
                Book a Room
              </a>
            </div>
            <div class="relative max-w-[45rem]">
              <div class="hidden l:block h3 absolute right-full mr-25">♥</div>
              <h3 class="h3 mb-20 m:mb-25">Eat & Drink</h3>
              <p class="mb-30 m:mb-50">
                Wm. Mulherin’s Sons, Lark, Middle Child, LMNO, Gilda, Johnny Brenda's, International
                Bar, Martha, Two Robbers, Bok Bar
              </p>
              <a
                href="https://www.google.com/maps/d/u/0/edit?mid=15EMT1iZQmGnCdrDF7Fc7z42zNnOhaVQ&usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                data-component="link"
                class="inline-block px-35 py-14 leading-100 bg-tan border-1 rounded-full hover:bg-black hover:text-tan transition-colors duration-300 ease-in-out"
              >
                Open Map
              </a>
            </div>
            <div class="relative max-w-[45rem]">
              <div class="hidden l:block h3 absolute right-full mr-25">♥</div>
              <h3 class="h3 mb-20 m:mb-25">Things to Do</h3>
              <p class="mb-30 m:mb-50">
                Philadelphia Museum of Art, Franklin Institute, Schuylkill River Trail, Helium
                Comedy Club, The Barnes Foundation, Wissahickon, Eastern State Penitentiary
              </p>
              <a
                href="https://www.google.com/maps/d/u/0/edit?mid=15EMT1iZQmGnCdrDF7Fc7z42zNnOhaVQ&usp=sharing"
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
        <h2 class="h2 mb-20">Frequently Asked Questions</h2>
        <div
          class="accordion [box-shadow:_0.7rem_0.7rem_0.9rem_theme('colors.blue-secondary')]"
          data-component="accordion"
        >
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40 flex-shrink-0">♥</div>What is the dress
              code?
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>Our wedding is Cocktail/Black Tie Optional.</p>
          </div>
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40 flex-shrink-0">♥</div>Is there parking
              available at the wedding venue?
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>
              Yes! There is plenty of free parking available at the venue. Please refrain from
              driving if you plan to consume alcoholic beverages. There are plenty of Ubers
              available in the area.
            </p>
          </div>
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40 flex-shrink-0">♥</div>Can I Uber there?
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>
              Yes, there are plenty of rideshare options available. Please make sure you use the
              address 100 E. Northwestern Avenue, or you will be dropped off at the wrong side of
              the property. If you are taking an Uber home, please try and call for your ride 30
              minutes before the end of the party.
            </p>
          </div>
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40 flex-shrink-0">♥</div>Will there be
              shuttle service to and from the event?
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>
              We will have two shuttles with limited seating available to and from our hotel, the
              Marriott Residence Inn in Bala Cynwyd, to the event at Morris Arboretum. If seating
              runs out, please let our older guests ride in the shuttle and opt to take an Uber
              instead :-)
            </p>
          </div>
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40 flex-shrink-0">♥</div>Is the wedding
              inside or outside?
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>
              Weather permitting, the ceremony and cocktail hour will both be held outside. The
              reception is under a tent.
            </p>
          </div>
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40 flex-shrink-0">♥</div>Are the ceremony
              and reception locations wheelchair accessible?
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>
              Yes! A big reason we chose Morris Arboretum was because of it’s accessibility.
              Additionally, golf carts will be available to transport guests with mobility
              restrictions to the ceremony location. Please note that the ceremony will be on grass.
            </p>
          </div>
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40 flex-shrink-0">♥</div>What’s the deal
              with the After Party?
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>
              This is totally optional for guests who want to hang out a little later. Our plan is
              to take over Manayunk Brewing Co, or whatever bar on Main St. that will take us in!
              Please note that there will not be a shuttle back, so be prepared to ride share back
              to your accommodation. The Residence Inn is also an easy 15 minute walk.
            </p>
          </div>
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40 flex-shrink-0">♥</div>When should I RSVP
              by?
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>Please RSVP by August 15, 2023.</p>
          </div>
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40 flex-shrink-0">♥</div>Are children
              invited?
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>
              Unless specified in your invitation, we cannot accommodate young children at the
              event.
            </p>
          </div>
          <button data-sqzbx-button>
            <h3>
              <div class="hidden m:inline-block w-58 mr-40 flex-shrink-0">♥</div>Can I take photos?
            </h3>
          </button>
          <div data-sqzbx-panel>
            <p>
              We have an amazing photographer who will be capturing the day, so all you have to do
              is relax and enjoy the event. We’re happy to share the photos with all of you when we
              receive them! If you do take photos, please refrain from taking any while our
              photographer is trying to get a shot, and no flash photography. Thank you!
            </p>
          </div>
        </div>
      </section>
      <section class="text-center mb-95 px-30" id="our-registry">
        <h2 class="h2 mb-10 s:mb-20">Our Registry</h2>
        <p class="text-18 m:text-25 text-center max-w-[45rem] mx-auto mb-40 s:mb-50">
          You know what they say—your presence is a gift! However, if you want to give us a present,
          we’re registered at Zola.
        </p>
        <a
          href="https://www.zola.com/registry/heintzwagzwedding"
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
      <section class="px-10 m:px-50 mb-100 m:mb-180" id="rsvp">
        <div class="bg-tan max-w-[94.5rem] mx-auto rounded-7 [box-shadow:_0.7rem_0.7rem_0.9rem_theme('colors.blue-secondary')] px-20 m:px-50 py-60 m:min-h-[68.5rem] flex flex-col">
          <h2 class="h2 mb-20">Rsvp</h2>
          <div class="flex-grow" data-component="form"></div>
        </div>
      </section>
      <footer class="text-center pb-30 l:pb-30">
        {/* <p class="font-candy text-35 2xs:text-[clamp(40px,calc(196/1536*100vw),196px)] mb-8 l:mb-0 leading-100">
          Jenny & Mike
        </p> */}
        <div class="px-10 m:px-50 mb-20 s:mb-30 m:mb-50">
          <svg class="overflow-visible" viewBox="0 0 1284 241" fill="none">
            <path
              d="M127.149 133.432C114.213 137.156 101.669 141.468 90.1046 146.172C72.6606 184.98 44.4366 231.236 16.2126 231.236C5.82463 231.236 0.140625 224.572 0.140625 214.772C0.140625 191.644 33.8526 162.636 85.2046 141.664C85.9886 139.508 86.9686 137.548 87.7526 135.588L134.793 22.6923C115.781 22.8883 98.1406 29.9443 89.7126 40.9203C74.6206 60.5203 81.0886 88.1563 62.6646 88.1563C56.5886 88.1563 52.8646 83.6483 52.8646 76.9844C52.8646 56.2084 90.6926 16.8123 137.145 16.8123H144.201L93.6326 137.94C93.6326 138.136 93.4366 138.332 93.4366 138.528C103.629 134.608 114.409 131.08 125.777 127.944L127.149 133.432ZM6.41263 214.576C6.41263 221.24 9.54862 225.356 16.8006 225.356C40.5166 225.356 66.3886 182.432 81.4806 149.7C37.5766 168.712 6.41263 193.408 6.41263 214.576Z"
              fill="black"
            />
            <path
              d="M221.965 121.476C210.989 139.508 183.353 188.9 148.269 188.9C134.745 188.9 129.061 181.844 129.061 168.124C129.061 137.156 158.853 78.7484 187.861 78.7484C196.485 78.7484 200.405 83.6483 200.405 91.4883C200.405 105.6 188.057 133.824 141.801 138.136C137.489 148.916 134.941 159.892 134.941 168.908C134.941 175.572 136.313 183.412 148.857 183.412C179.237 183.412 206.089 137.744 217.653 118.732L221.965 121.476ZM186.881 84.2364C173.161 84.2364 154.933 107.56 144.153 132.452C182.177 127.944 194.525 104.816 194.525 92.6643C194.525 87.3723 192.173 84.2364 186.881 84.2364Z"
              fill="black"
            />
            <path
              d="M213.724 125.2C227.248 103.052 241.36 78.7484 251.748 78.7484C256.06 78.7484 258.02 81.8843 258.02 86.0004C258.02 92.0763 253.904 101.484 249.004 112.068C260.176 93.4484 272.328 78.7484 282.912 78.7484C289.184 78.7484 292.908 83.6483 292.908 91.0963C292.908 114.42 257.628 154.012 257.628 174.788C257.628 180.668 260.372 183.412 265.076 183.412C284.088 183.412 311.528 137.744 323.092 118.732L327.404 121.476C316.428 139.508 288.008 188.9 264.292 188.9C257.04 188.9 251.748 184.784 251.748 175.964C251.748 153.228 287.028 113.244 287.028 92.0763C287.028 87.9603 285.656 84.2364 281.344 84.2364C269.192 84.2364 251.16 115.4 237.244 143.428C228.816 168.908 226.66 188.9 216.664 188.9C199.024 188.9 225.288 153.032 237.048 128.14L240.38 120.496C246.26 106.776 252.532 93.2523 252.532 86.3923C252.532 85.0204 251.944 84.2364 250.376 84.2364C244.104 84.2364 230.58 107.364 217.84 128.14L213.724 125.2Z"
              fill="black"
            />
            <path
              d="M319.189 125.2C332.713 103.052 346.825 78.7484 357.213 78.7484C361.525 78.7484 363.485 81.8843 363.485 86.0004C363.485 92.0763 359.369 101.484 354.469 112.068C365.641 93.4484 377.793 78.7484 388.377 78.7484C394.649 78.7484 398.373 83.6483 398.373 91.0963C398.373 114.42 363.093 154.012 363.093 174.788C363.093 180.668 365.837 183.412 370.541 183.412C389.553 183.412 416.993 137.744 428.557 118.732L432.869 121.476C421.893 139.508 393.473 188.9 369.757 188.9C362.505 188.9 357.213 184.784 357.213 175.964C357.213 153.228 392.493 113.244 392.493 92.0763C392.493 87.9603 391.121 84.2364 386.809 84.2364C374.657 84.2364 356.625 115.4 342.709 143.428C334.281 168.908 332.125 188.9 322.129 188.9C304.489 188.9 330.753 153.032 342.513 128.14L345.845 120.496C351.725 106.776 357.997 93.2523 357.997 86.3923C357.997 85.0204 357.409 84.2364 355.841 84.2364C349.569 84.2364 336.045 107.364 323.305 128.14L319.189 125.2Z"
              fill="black"
            />
            <path
              d="M431.906 176.356C431.906 179.296 432.298 183.412 438.374 183.412C458.366 183.412 482.866 139.704 497.37 109.52C501.486 91.2923 504.034 78.3563 512.07 78.3563C530.102 78.3563 503.642 115.988 494.038 141.272C494.038 141.468 493.842 141.664 493.842 142.056L493.646 142.448C493.254 143.428 492.862 144.604 492.47 145.584L489.922 152.248C464.246 219.476 450.722 240.448 423.086 240.448C404.466 240.448 389.962 230.648 389.962 219.476C389.962 214.576 392.902 211.636 397.606 211.636C411.326 211.636 409.758 234.96 427.594 234.96C445.234 234.96 460.718 212.028 484.434 149.896L486.982 143.232C488.158 140.096 489.334 136.764 490.706 133.432C475.418 160.676 455.622 188.9 438.178 188.9C429.554 188.9 426.026 184 426.026 176.356C426.026 165.772 432.102 152.052 444.646 128.14C456.014 106.58 465.226 93.2523 465.226 86.3923C465.226 85.0204 464.638 84.2364 463.07 84.2364C455.818 84.2364 436.806 115.204 422.498 138.332L418.186 135.392C433.474 110.696 452.486 78.7484 464.442 78.7484C469.146 78.7484 470.714 81.8843 470.714 86.0004C470.714 94.0363 460.522 108.344 448.958 130.688C437.198 153.62 431.906 166.36 431.906 176.356Z"
              fill="black"
            />
            <path
              d="M665.089 150.68C661.169 157.148 656.857 163.42 651.957 168.712C659.601 177.532 669.205 183.02 680.769 183.02C704.485 183.02 713.697 159.5 714.089 137.94L719.969 137.548C719.577 163.224 707.033 188.9 679.985 188.9C667.245 188.9 656.465 183.02 647.841 173.22C638.237 182.628 626.869 188.9 612.561 188.9C591.393 188.9 572.773 175.376 572.773 149.308C572.773 122.456 592.569 106.776 618.833 90.7043C619.813 90.1163 620.989 89.3324 621.969 88.7443V87.9604C621.969 48.1723 636.081 15.0483 663.913 15.0483C676.065 15.0483 685.473 21.9083 685.473 36.6083C685.473 58.3643 665.481 69.1443 628.241 91.6843C628.829 117.556 635.297 145.78 648.233 164.008C652.349 158.912 656.073 153.228 659.601 147.544C676.457 119.516 687.237 88.1563 709.581 88.1563C719.773 88.1563 724.085 94.4283 724.085 100.7C724.085 107.168 719.773 113.44 712.521 113.44C704.485 113.44 699.389 105.404 694.685 105.404C685.669 105.404 675.281 133.824 665.089 150.68ZM662.933 20.9283C639.217 20.9283 628.829 52.4844 628.241 85.0204C660.385 65.8123 679.201 55.4243 679.201 37.3923C679.201 26.2203 672.145 20.9283 662.933 20.9283ZM579.045 148.72C579.045 171.26 594.725 183.02 612.757 183.02C625.693 183.02 635.689 177.14 644.117 168.516C630.789 150.484 623.341 122.848 622.165 95.6043H621.969C598.057 110.108 579.045 124.416 579.045 148.72Z"
              fill="black"
            />
            <path
              d="M886.332 103.444C921.612 59.1483 953.364 14.2643 979.628 14.2643L982.176 19.3603C943.172 71.6923 908.088 143.232 900.64 177.924L956.892 103.444C990.996 58.3643 1023.92 14.2643 1050.19 14.2643L1052.74 19.3603C1010.01 76.7883 974.14 145.78 974.14 172.436C974.14 180.472 977.276 183.412 983.548 183.412C1006.28 183.412 1034.31 137.744 1045.88 118.732L1050.19 121.476C1039.21 139.508 1011.18 188.9 982.764 188.9C973.944 188.9 968.064 184.784 968.064 173.416C968.064 146.76 1000.99 80.3163 1042.94 21.9083C1018.83 29.3563 990.8 68.7523 961.596 107.364L897.896 191.644L893.192 187.724C895.152 158.324 930.236 80.9043 972.572 21.7123C949.052 28.7683 921.416 69.1443 891.036 107.364C857.128 150.288 829.688 192.036 789.9 192.036C770.104 192.036 754.816 181.648 754.816 170.28C754.816 164.008 758.736 160.48 763.636 160.48C778.728 160.48 774.612 184.98 795.976 184.98C823.416 184.98 853.796 144.604 886.332 103.444Z"
              fill="black"
            />
            <path
              d="M1097.8 38.9603C1100.74 38.9603 1102.7 41.7043 1102.7 45.8203C1102.7 51.5043 1099.17 57.1883 1094.86 57.1883C1091.92 57.1883 1089.96 54.4443 1089.96 50.3283C1089.96 44.6443 1093.49 38.9603 1097.8 38.9603ZM1090.74 88.1563C1090.74 112.068 1054.48 155.972 1054.48 174.984C1054.48 180.668 1057.62 183.412 1061.34 183.412C1076.83 183.412 1100.35 141.86 1114.07 118.732L1118.57 121.084C1107.6 139.116 1081.33 188.9 1060.95 188.9C1054.87 188.9 1048.6 184.392 1048.6 176.356C1048.6 155.58 1085.06 108.736 1085.06 88.3523C1085.06 85.0203 1084.08 84.2364 1082.31 84.2364C1071.53 84.2364 1053.5 116.38 1039.59 138.724L1035.67 135.196C1050.95 110.5 1068.99 78.7484 1082.9 78.7484C1087.8 78.7484 1090.74 81.8843 1090.74 88.1563Z"
              fill="black"
            />
            <path
              d="M1091.85 187.332L1086.36 184.98L1124.78 93.2523C1159.08 11.1283 1176.13 0.152344 1188.48 0.152344C1195.93 0.152344 1200.83 4.26834 1200.83 12.5003C1200.83 28.1803 1183.38 28.3763 1164.57 43.4683C1152.02 53.4643 1140.85 69.9284 1130.46 94.8204L1104.98 155.972C1112.82 143.428 1120.66 130.884 1128.31 119.712C1144.77 95.6043 1161.04 78.7484 1176.72 78.7484C1186.72 78.7484 1192.2 85.2164 1192.2 95.4083C1192.4 130.1 1132.03 137.352 1132.03 172.044C1132.03 179.688 1135.76 183.412 1142.62 183.412C1169.08 183.412 1195.14 134.608 1205.34 118.732L1209.65 121.476C1198.67 139.508 1171.23 188.9 1142.03 188.9C1132.62 188.9 1126.15 184.196 1126.15 172.24C1126.15 134.216 1186.13 127.552 1186.32 95.4083C1186.32 89.1363 1183.19 84.2364 1176.72 84.2364C1162.22 84.2364 1147.52 101.484 1132.62 122.848C1119.29 142.448 1105.18 166.164 1091.85 187.332Z"
              fill="black"
            />
            <path
              d="M1283.12 121.476C1272.15 139.508 1244.51 188.9 1209.43 188.9C1195.9 188.9 1190.22 181.844 1190.22 168.124C1190.22 137.156 1220.01 78.7484 1249.02 78.7484C1257.64 78.7484 1261.56 83.6483 1261.56 91.4883C1261.56 105.6 1249.21 133.824 1202.96 138.136C1198.65 148.916 1196.1 159.892 1196.1 168.908C1196.1 175.572 1197.47 183.412 1210.01 183.412C1240.39 183.412 1267.25 137.744 1278.81 118.732L1283.12 121.476ZM1248.04 84.2364C1234.32 84.2364 1216.09 107.56 1205.31 132.452C1243.33 127.944 1255.68 104.816 1255.68 92.6643C1255.68 87.3723 1253.33 84.2364 1248.04 84.2364Z"
              fill="black"
            />
          </svg>
        </div>

        <p class="text-14 m:text-20 italic">Website & invitations by the Bride & Groom ♥</p>
      </footer>
    </Layout>
  )
}

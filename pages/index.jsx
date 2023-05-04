import { h } from 'hyposcript'
import { Layout } from '../components/layout'

export function getStaticPaths() {
  return ['/']
}

export async function handler() {
  return (
    <Layout>
      <section class="mb-35">
        <div class="relative h-[116vh]">
          <img
            class="absolute w-full h-full inset-0 object-cover object-top opacity-0 transition-opacity duration-1000 ease-in-out"
            data-component="img"
            data-src="/images/hero.jpg"
            alt="The bride and groom"
          />
          <h1
            class="relative top-[calc(100vh-7.2rem)] translate-y-[calc(-100%-3rem)] z-1 w-[100rem] mx-auto text-140 leading-123 tracking-0 text-tan text-center font-candy [-webkit-text-stroke-width:0.1rem]
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
    </Layout>
  )
}

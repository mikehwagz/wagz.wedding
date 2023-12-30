import { h } from 'hyposcript'
import manifest from '../manifest.json'
import { Header } from './header'

export function Layout({ children }) {
  const shareTitle = "Jenny & Mike's Wedding Day!"
  const shareDescription =
    'September 23, 2023 at Morris Arboretum of the University of Pennsylvania in Philadelphia, PA'

  const shareImage = {
    url: 'https://wagz.wedding/images/share.jpg',
    alt: 'Jenny + Mike 9.23.23',
    width: 1200,
    height: 630,
  }

  return `<!DOCTYPE html>${(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preload" href="/fonts/cdr.woff2" as="font" type="font/woff2" crossorigin />
        <link rel="preload" href="/fonts/gl.woff2" as="font" type="font/woff2" crossorigin />
        <link rel="preload" href="/fonts/gli.woff2" as="font" type="font/woff2" crossorigin />

        <link rel="preload" href={`/${manifest['main.css']}`} as="style" />
        <link rel="preload" href={`/${manifest['main.js']}`} as="script" />

        <title>{shareTitle}</title>
        <meta content={shareDescription} name="description" />

        {/* Open Graph */}
        <meta content="website" property="og:type" />
        <meta content={shareTitle} property="og:site_name" />
        <meta content={shareTitle} property="og:title" />
        <meta content={shareDescription} property="og:description" />
        <meta content={shareImage.url} property="og:image" />
        <meta content={shareImage.alt} property="og:image:alt" />
        <meta content={shareImage.width} property="og:image:width" />
        <meta content={shareImage.height} property="og:image:height" />

        {/* Twitter Card */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="https://wagz.wedding" name="twitter:url" />
        <meta content={shareTitle} name="twitter:title" />
        <meta content={shareDescription} name="twitter:description" />
        <meta content={shareImage.url} name="twitter:image" />
        <meta content={shareImage.alt} name="twitter:image:alt" />

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖤</text></svg>"
        />

        <link rel="stylesheet" href={`/${manifest['main.css']}`} />
        {/* <script src="https://unpkg.com/@sanity/client"></script> */}
        <script src={`/${manifest['main.js']}`} defer></script>
      </head>
      <body>
        <div id="root">
          <Header />
          <main class="fixed inset-0 [clip-path:inset(calc(var(--header-height)-1px)_calc(var(--frame-padding)-1px)_calc(var(--frame-padding)-1px)_calc(var(--frame-padding)-1px)_round_var(--frame-border-radius))] bg-black">
            <div
              id="scroll-wrapper"
              class="w-full h-full [clip-path:inset(var(--header-height)_var(--frame-padding)_var(--frame-padding)_var(--frame-padding)_round_calc(var(--frame-border-radius)-1px))] bg-blue-primary px-[var(--frame-padding)] pb-[var(--frame-padding)] overflow-y-auto"
            >
              <div id="scroll-content">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )}`
}

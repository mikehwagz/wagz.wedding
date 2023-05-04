import { h } from 'hyposcript'
import manifest from '../manifest.json'
import { Header } from './header'

export function Layout({ children }) {
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

        <title>wagz.wedding</title>
        {/* <meta content={shareDescription} name="description" /> */}

        {/* Open Graph */}
        <meta content="website" property="og:type" />
        {/* <meta content={shareTitle} property="og:site_name" />
        <meta content={shareTitle} property="og:title" />
        <meta content={shareDescription} property="og:description" /> */}

        {/* {shareImage ? (
          <>
            <meta content={shareImage.url} property="og:image" />
            <meta content={shareImage.alt} property="og:image:alt" />
            <meta content={shareImage.width} property="og:image:width" />
            <meta content={shareImage.height} property="og:image:height" />
          </>
        ) : null} */}

        {/* Twitter Card */}
        {/* <meta content="summary_large_image" name="twitter:card" />
        <meta content={site.url} name="twitter:url" />
        <meta content={shareTitle} name="twitter:title" />
        <meta content={shareDescription} name="twitter:description" />
        {shareImage ? (
          <>
            <meta content={shareImage.url} name="twitter:image" />
            <meta content={shareImage.alt} name="twitter:image:alt" />
          </>
        ) : null} */}

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖤</text></svg>"
        />

        <link rel="stylesheet" href={`/${manifest['main.css']}`} />
        <script src={`/${manifest['main.js']}`} defer></script>
      </head>
      <body>
        <div id="root">
          <Header />
          <main class="fixed inset-0 [clip-path:inset(calc(7.2rem-1px)_calc(2rem-1px)_calc(2rem-1px)_calc(2rem-1px)_round_4rem)] bg-black">
            <div class="w-full h-full [clip-path:inset(7.2rem_2rem_2rem_2rem_round_calc(4rem-1px))] bg-blue-primary pt-72 px-20 pb-20 overflow-y-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )}`
}

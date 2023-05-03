import { h } from 'hyposcript'
import manifest from '../manifest.json'

export function Layout({ children }) {
  return `<!DOCTYPE html>${(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preload" href="/fonts/nmb.woff2" as="font" type="font/woff2" crossorigin />
        <link rel="preload" href="/fonts/nmm.woff2" as="font" type="font/woff2" crossorigin />
        <link rel="preload" href="/fonts/nmr.woff2" as="font" type="font/woff2" crossorigin />

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

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#111111" />
        <meta name="theme-color" content="#111111"></meta>

        <link rel="stylesheet" href={`/${manifest['main.css']}`} />
        <script src={`/${manifest['main.js']}`} defer></script>
      </head>
      <body>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  )}`
}

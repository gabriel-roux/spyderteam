import { getCssText } from '@/styles/config/stitches.config';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;400;600;700;900&display=swap" rel="stylesheet" />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{
            __html: getCssText(),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

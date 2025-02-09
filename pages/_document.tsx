import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&family=Titillium+Web:wght@300;400;600;700&family=Charmonman:wght@400;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/logo.png" type="image/x-icon"  />
      <title>Koush</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&family=Titillium+Web:wght@300;400;600;700&family=Charmonman:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/logo.png" type="image/x-icon" />
        <title>Koushikur Islam – Computer Researcher in Distributed Systems, Cloud Computing, Edge Computing, Internet of Things (IoT)</title>
        <meta name="description" content="Koushikur Islam is a Computer Researcher in Distributed Systems, Cloud Computing, Edge Computing, Internet of Things (IoT)." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Koushikur Islam",
              "jobTitle": "Computer Researcher in Distributed Systems, Cloud Computing, Edge Computing, Internet of Things (IoT)",
              "url": "koushikur-islam.github.io",
              "sameAs": [
                "https://www.linkedin.com/in/koushikur-islam/",
                "https://github.com/koushikur-islam",
                "https://scholar.google.com/citations?user=gkOWEkgAAAAJ&hl=en"
              ]
            }),
          }}
        />
        <meta name="google-site-verification" content="xxxMXYr3jkght64x_BA6Ajml99hTlqEAX3Avmo5kGiU" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
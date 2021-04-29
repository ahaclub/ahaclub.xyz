import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        lang="zh"
        className={`text-gray-500 antialiased ${
          this.props.dangerousAsPath.startsWith('/examples/') ? '' : 'bg-white'
        }`}
      >
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00b4b6" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="AhaClub" />
          <link rel="shortcut icon" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" sizes="32x32" href="/favicon.ico" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="bg-yellow-100">
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    )
  }
}

import Head from "next/head";

export const siteTitle = "Studio Roozen";

export default function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="keywords" content="Keywords" />
      <title>{siteTitle}</title>
      <meta name="description" content="Gedreven ontwerpen met typografie, content en sterke verhalen" />
      <meta name="og:site_name" content={siteTitle} />
      <meta property="og:url" content="https://roozen.nl" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.ico"
      />
      <link rel="apple-touch-icon" sizes="192x192" href="/logo192.png" />
      <link rel="apple-touch-icon" sizes="512x512" href="/logo512.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </Head>
  );
}

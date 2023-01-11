import React from 'react'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Destack | Page builder</title>
        <link rel="icon" href="/images/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="An open source page builder based on Craft.js and Tailwind CSS." />
    
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App

import React from 'react'

import AnalyticsHead from '../components/Analytics'

import '../styles/globals.css'

const isDev = process.env.NODE_ENV === 'development'

const App = ({ Component, pageProps }) => {
  return (
    <>
      {!isDev && <AnalyticsHead/>}
      <Component {...pageProps} />
    </>
  )
}

export default App

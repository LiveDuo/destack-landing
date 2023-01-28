import React from 'react'

import SocialHead from './components/Social'
import AnalyticsHead from './components/Analytics'

const isDev = process.env.NODE_ENV === 'development'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <SocialHead/>
      {!isDev && <AnalyticsHead/>}
      <Component {...pageProps} />
    </>
  )
}

export default App

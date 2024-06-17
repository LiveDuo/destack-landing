import React from 'react'

import AnalyticsHead from '../components/Analytics'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/globals.css'

const isDev = process.env.NODE_ENV === 'development'

const App = ({ Component, pageProps }) => {
  return (
    <>
      {!isDev && <AnalyticsHead/>}
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default App

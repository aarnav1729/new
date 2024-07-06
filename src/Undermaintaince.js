import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Banner from './images/under-maintaince.jpg'

export const Undermaintaince = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/under-construction" />
    </Helmet>
        <Header />
        <section id='banner' className='p-0'>
      <div className='banner'>
        <img src={Banner} />
      </div>
    </section>
        <Footer />
    </>
  )
}

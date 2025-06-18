import React from 'react'
import Header from '../header/Header'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Statistics from '../Statistics/Statistics'

const AboutPage = () => {
  return (
    <>
    <Header />
    <div className="py-5 bg-dark"></div>
    <About />
    <Statistics />
    <Footer />
    </>
  )
}

export default AboutPage
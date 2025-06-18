import React from 'react'
import Header from "../header/Header"
import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Statistics from '../Statistics/Statistics'
import Contact from '../contact/contact'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Statistics />
    <Contact />
    <Footer />
    </>
  )
}

export default Home
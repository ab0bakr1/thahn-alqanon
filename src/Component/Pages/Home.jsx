import React from 'react'
import Header from "../header/Header"
import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Statistics from '../Statistics/Statistics'
import Contact from '../contact/contact'

const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Statistics />
    <Contact />
    </>
  )
}

export default Home
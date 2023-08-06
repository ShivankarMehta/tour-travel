import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import contactImg from "../assets/2.jpg";
import Footer from '../components/Footer';
import Contactform from '../components/Contactform';
const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero
     cName="hero-mid"
     heroImg={contactImg}
     title="Contact"
     btnClass="hide"
     />
     <Contactform/>
     <Footer/>
    </>
  )
}

export default Contact
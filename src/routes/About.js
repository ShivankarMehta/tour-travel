import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import aboutImg from "../assets/night.jpg";
import Footer from '../components/Footer';
import Aboutus from '../components/Aboutus';
const About = () => {
  return (
    <>
    <Navbar/>
    <Hero
     cName="hero-mid"
     heroImg={aboutImg}
     title="About"
     btnClass="hide"
     />
     <Aboutus/>
     <Footer/>
    </>
  )
}

export default About
import DestinationData from "./DestinationData"
import "./Destinationstyle.css"
import React from 'react'
import mountain1 from "../assets/1.jpg"
import mountain2 from "../assets/2.jpg"
import mountain3 from "../assets/3.jpg"
import mountain4 from "../assets/4.jpg"
const Destination = () => {
  return (
  <div className="destination">
    <h1>Popular Destination</h1>
    <p>Tours give you the opportunity to see a lot within a time frame.</p>
    <DestinationData
    className="first-des"
     heading="Tall Volcano, Batangas"
     text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque porro veritatis sequi magnam eum itaque vero, possimus aliquid labore. Natus quia in suscipit deleniti necessitatibus culpa laudantium sint quis. Officiis nam, iure doloremque, perferendis ipsam aspernatur eius, quasi iusto libero reprehenderit magnam non odit ratione tempora. Qui officiis totam iste."
     img1={mountain1}  
     img2={mountain2} 
    /> 
     <DestinationData
     className="first-des-reverse"
     heading="Mt. Daguldul, Batangas"
     text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque porro veritatis sequi magnam eum itaque vero, possimus aliquid labore. Natus quia in suscipit deleniti necessitatibus culpa laudantium sint quis. Officiis nam, iure doloremque, perferendis ipsam aspernatur eius, quasi iusto libero reprehenderit magnam non odit ratione tempora. Qui officiis totam iste."
     img1={mountain3}  
     img2={mountain4} 
    /> 
  </div>
  )
}

export default Destination
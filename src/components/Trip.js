import './Tripstyle.css'
import React from 'react'
import TripData from './TripData';
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="trip-card">
            <TripData
            propimg={Trip1}
            heading="Trip in Indonesia"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque porro veritatis sequi magnam eum itaque vero, possimus aliquid labore."
            />
            <TripData
            propimg={Trip2}
            heading="Trip in Indonesia"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque porro veritatis sequi magnam eum itaque vero, possimus aliquid labore."
            />
            <TripData
            propimg={Trip3}
            heading="Trip in Indonesia"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque porro veritatis sequi magnam eum itaque vero, possimus aliquid labore."
            />
        </div>
    </div>
  )
}

export default Trip
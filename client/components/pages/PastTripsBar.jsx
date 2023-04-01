import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

const PastTripsBar = ({user})=>{

  const [trips, setTrips] = useState(null)

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = ()=>{
    axios.get(`trips/alltrips/${user.id}`)
    .then((response)=>{
  
      setTrips(response.data)
    })
  }
console.log(trips)
let slideNum = 0
if(trips && trips.length >= 3){
slideNum = 3
}else if(trips&& trips.length < 3){
  slideNum = trips.length
}


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: slideNum,
  slidesToScroll: slideNum,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
};
console.log(trips)
if(trips){
  return(
    // <h2>Past Trips</h2>
    <div id="outerFrame" className="ImgFrame">
    <Slider {...settings}>
    {trips.map((trip) => (
      <div className="ImgFrame">
        <Link to="/past-trips-page" state={{trip:trip}}>
            <img className='pastTripImages'key={trip._id} src={trip.campsiteImg[0].URL} data-name={trip.campsiteName} title={trip.campsiteName}/>
            <span className="text">{trip.campsiteName}</span>
            </Link>
            </div>
    ))}
    </Slider>
  </div>
  )
}


}



export default PastTripsBar
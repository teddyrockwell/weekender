import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import TripWeatherbar from '../TripWeatherbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const UpcomingTrip = ()=>{
  
  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

  const [trip, setTrip] = useState(null)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));


  useEffect(() => {
    
    getTrip();
  }, [user]);

  const getTrip = ()=>{
    
    axios.get(`trips/trips/${user.id}`)
    .then((response)=>{
   
      setTrip(response.data)
    })
  }

const [ weatherData, setweatherData ] = useState(null);

//a function that we will pass weather data from weatherbar up.
const updateWeatherDataState = (weatherdata)=>{
 setweatherData(weatherdata)
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
};

if(trip){
return(
  <div className="ChosenCampGroundPage">
  <div className="topBar">
<h1 className="weekendertext">
<Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link></h1>
  <h1 className='welcome'>{trip.campsiteName}</h1>
  <button className='logoutButton' onClick={(logout)}>Log Out</button>
</div>
   <TripWeatherbar trip={trip} updateWeatherDataState={updateWeatherDataState}/>
   {/* <img src={trip.campsiteImg[0].URL}/> */}
   <div className='photoSlider'>
<Slider {...settings}>
{trip?.campsiteImg.map((image) => (
<div className="no">
     <img className='ChosenCampGroundPhotos' src={image.URL} />
     <span className="text">{trip.campsiteName}</span>
     </div>
))}
</Slider>
</div>
<div className='BottomStuff'>
   <div className="ChosenCampGroundDesc"dangerouslySetInnerHTML={{ __html: trip.campsiteDesc}} />
   
   <Link to="/packing-list" state={{weatherData:weatherData}}style={{textDecoration: 'none', textEmphasisColor: 'white'}}>
   <button className='listButton'>Packing List</button>
   </Link>
   </div>
   </div>
 )
}else{
  return(
    <div>farts</div>
  )
}
};

export default UpcomingTrip
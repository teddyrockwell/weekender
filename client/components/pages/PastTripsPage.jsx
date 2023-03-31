import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import TripWeatherbar from '../TripWeatherbar';
import { useLocation } from 'react-router-dom'

const PastTripsPage = ({user})=>{

  const location = useLocation();
const { trip }= location.state
  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

 
const [ weatherData, setweatherData ] = useState(null);

//a function that we will pass weather data from weatherbar up.
const updateWeatherDataState = (weatherdata)=>{
 setweatherData(weatherdata)
};


console.log('weatherdata',weatherData)


if(trip){
return(
  <div className="newTripPage">
   <div className="topBar">
<h1 className="weekendertext">
<Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link></h1>
<h1 className='welcome'>{trip.campsiteName}</h1>
  <button className='logoutButton' onClick={(logout)}>Log Out</button>
</div>
   <TripWeatherbar trip={trip} updateWeatherDataState={updateWeatherDataState}/>
   <img src={trip.campsiteImg}/>
   <div className="ChosenCampGroundDesc"dangerouslySetInnerHTML={{ __html: trip.campsiteDesc}} />
   <div className='container'>
   <Link to="/packing-list" state={{weatherData:weatherData}}style={{textDecoration: 'none', textEmphasisColor: 'white'}}>
   <button className='listButton'>Packing List</button>
   </Link>
   </div>
   </div>
 )
}
};

export default PastTripsPage
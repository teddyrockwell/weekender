import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import TripWeatherbar from '../TripWeatherbar';


const UpcomingTrip = ({user})=>{
  
  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

  const [trip, setTrip] = useState(null)

  useEffect(() => {
    getTrip();
  }, []);

  const getTrip = ()=>{
    axios.get(`trips/trips/${user.id}`)
    .then((response)=>{
   
      setTrip(response.data)
    })
  }
console.log(trip)
const [ weatherData, setweatherData ] = useState(null);

//a function that we will pass weather data from weatherbar up.
const updateWeatherDataState = (weatherdata)=>{
 setweatherData(weatherdata)
};


console.log('weatherdata',weatherData)


if(trip){
return(
  <div className="newTripPage">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='welcome'>{trip.campsiteName}</h3>
   </h1>
   <TripWeatherbar trip={trip} updateWeatherDataState={updateWeatherDataState}/>
   <img src={trip.campsiteImg}/>
   <div className='container'>
   <Link to="/packing-list" state={{weatherData:weatherData}}style={{textDecoration: 'none', textEmphasisColor: 'white'}}>
   <button className='listButton'>Packing List</button>
   </Link>
   </div>
   </div>
 )
}
};

export default UpcomingTrip
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import TripWeatherbar from '../TripWeatherbar';


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




if(trip){
return(
  <div className="newTripPage">
  <div className="topBar">
<h1 className="weekendertext">
<Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link></h1>
  <h1 className='welcome'> Welcome Back {user.displayName.split(" ")[0]}</h1>
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
}else{
  return(
    <div>farts</div>
  )
}
};

export default UpcomingTrip
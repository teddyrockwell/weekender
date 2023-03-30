import { Link, useLocation } from 'react-router-dom'
import WeatherBar from '../Weatherbar';
import axios from 'axios';

const ChosenCampground = ({ user })=>{
const location = useLocation();

const { campground , startDate, endDate }= location.state

  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

  // create a function that on click,
  // endpoint is 'trips/trips/:id'
const saveTrip = () => {

axios.post(`trips/trips/${user.id}`,{
  "data":{
    "dateStart": startDate,
    "dateEnd": endDate,
    "campsiteImg": campground.MEDIA[0].URL,
    "campsiteName": campground.FacilityName,
    "campsiteDesc": campground.FacilityDescription,
    "campsiteLong": campground.FacilityLongitude,
    "campsiteLat": campground.FacilityLatitude
  }
} ).then(()=> {
  console.log('successful trip save');
  window.location.reload();
  
}).catch((err) => {
  console.error('failure', err);
})
};

return(
<div>
  <div className="TopStuff">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='ChosenCampGroundName'>{campground.FacilityName}</h3>
     <h4 className='Weatherbar'><WeatherBar startDate={startDate} endDate={endDate} campground={campground}/></h4>

   </h1>
   </div>
   <div className='BottomStuff'>
   <img className="ChosenCampGroundPhoto" src={campground.MEDIA[0].URL}/>
   <Link to='/upcoming-trip' style={{textDecoration: 'none', textEmphasisColor: 'white'}}>
   <button className='saveTripButton'  onClick={saveTrip}>SAVE TRIP</button>
   </Link>
   <Link to='/new-trip' style={{textDecoration: 'none', textEmphasisColor: 'white'}}>
   <button className='goBackButton'>GO BACK</button>
   </Link>
   <div className="ChosenCampGroundDesc"dangerouslySetInnerHTML={{ __html: campground.FacilityDescription }} />
    <div className="ChosenCampGroundLat">Latitude:{campground.FacilityLatitude}</div>
    <div className="ChosenCampGroundLong">Longitude:{campground.FacilityLongitude}</div>
    </div>
    </div>
 )

};

export default ChosenCampground
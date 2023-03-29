import { Link, useLocation } from 'react-router-dom'



const ChosenCampground = ()=>{
const location = useLocation();
const { campground }= location.state
console.log(campground)
  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

return(
<div>
  <div className="TopStuff">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='ChosenCampGroundName'>{campground.FacilityName}</h3>
     <h4 className='Weatherbar'><WeatherBar /></h4>

   </h1>
   </div>
   <div className='BottomStuff'>
   <img className="ChosenCampGroundPhoto" src={campground.MEDIA[0].URL}/>
   <button className='saveTripButton'>SAVE TRIP</button>
   <Link to='/new-trip' style={{textDecoration: 'none', textEmphasisColor: 'white'}}>
   <button className='goBackButton'>GO BACK</button>
   </Link>
   <div className="ChosenCampGroundDesc"dangerouslySetInnerHTML={{ __html: campground.FacilityDescription }} />
    <div className="ChosenCampGroundLat">Lattitude:{campground.FacilityLatitude}</div>
    <div className="ChosenCampGroundLong">Longitude:{campground.FacilityLongitude}</div>
    </div>
    </div>
 )

};

export default ChosenCampground
import { Link, useLocation } from 'react-router-dom'



const ChosenCampground = ()=>{
const location = useLocation();
const { campground }= location.state
console.log(campground);
  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

  // using the save button, want to add the TripSchema with it's 5 values, inside of the User's schema, in the tripsId array
  /*
  {
    "data":{
  "dateStart": "2023-03-30",
  "dateEnd": "2023-03-31",
  "campsiteImg": "campground.MEDIA[0].URL",
  "campsiteName": "campground.FacilityName",
  "campsiteDesc": "campground.FacilityDescription"
    }
  }
  */


return(
<div>
  <div className="TopStuff">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='ChosenCampGroundName'>{campground.FacilityName}</h3>
   </h1>
   </div>
   <div className='BottomStuff'>
   <img className="ChosenCampGroundPhoto" src={campground.MEDIA[0].URL}/>
   <button className='saveTripButton'>SAVE TRIP</button>
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
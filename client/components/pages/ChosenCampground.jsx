import { Link, useLocation } from 'react-router-dom'



const ChosenCampground = ()=>{
const location = useLocation();
const { campground }= location.state
console.log(campground)
  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

return(

  <div className="ChosenCampgroundPage">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='ChosenCampGroundName'>{campground.FacilityName}</h3>
   </h1>
   <img className="ChosenCampGroundPhoto" src={campground.MEDIA[0].URL}/>
   <div className="CampGroundDesc"dangerouslySetInnerHTML={{ __html: campground.FacilityDescription }} />
    <div className="CampGroundLat">Lattitude:{campground.FacilityLatitude}</div>
    <div className="CampGroundLong">Longitude:{campground.FacilityLongitude}</div>
   </div>
 )

};

export default ChosenCampground
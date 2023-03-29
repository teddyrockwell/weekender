import { Link, useLocation } from 'react-router-dom'
const CampGround = ({startDate, endDate, campground})=>{

// console.log('urltest',campground.MEDIA[0].URL)

//USE THIS TO RENDER DESCRIPTIONS ONCE A TRIP IS CLICKED ON
// <div className="CampGroundDesc"dangerouslySetInnerHTML={{ __html: campground.FacilityDescription }} />

  return(
  
    
    <div className="CampGroundContainer">
      <Link to="/chosen-campground" state={{ campground: campground, startDate: startDate, endDate: endDate }} >
    <img className="CampGroundPhoto" src={campground.MEDIA[0].URL}/>
    <div className="CampGroundName">{campground.FacilityName}</div>
    <div className="CampGroundLat">Latitude:{campground.FacilityLatitude}</div>
    <div className="CampGroundLong">Longitude:{campground.FacilityLongitude}</div>
    </Link>
     </div>
     
   )
  
  };
  
  export default CampGround
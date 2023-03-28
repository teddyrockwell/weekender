import { Link } from 'react-router-dom'
const CampGround = ({campground})=>{

// console.log('urltest',campground.MEDIA[0].URL)

//USE THIS TO RENDER DESCRIPTIONS ONCE A TRIP IS CLICKED ON
// <div className="CampGroundDesc"dangerouslySetInnerHTML={{ __html: campground.FacilityDescription }} />

  return(
  
    
    <div className="CampGroundContainer">
      <Link to="/chosen-campground">
    <img className="CampGroundPhoto" src={campground.MEDIA[0].URL}/>
    <div className="CampGroundName">{campground.FacilityName}</div>
    <div className="CampGroundLat">Lattitude:{campground.FacilityLatitude}</div>
    <div className="CampGroundLong">Longitude:{campground.FacilityLongitude}</div>
    </Link>
     </div>
     
   )
  
  };
  
  export default CampGround
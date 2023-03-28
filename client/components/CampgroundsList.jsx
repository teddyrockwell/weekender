import { Link } from 'react-router-dom'
import fakeCampGroundData from '../../server/db/fakeCampGroundData';
import CampGround from './CampGround';

const CampGroundsList = ()=>{

const fakeData = fakeCampGroundData.RECDATA

return(

  <div className="CampGroundsListContainer">
    {fakeData.map((campground)=>{
      if(campground.MEDIA.length && campground.FacilityTypeDescription === "Campground"){
      return <CampGround key={campground.FacilityID} campground={campground}/>
      }
    })}
   </div>
 )

};

export default CampGroundsList
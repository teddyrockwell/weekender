import { Link } from 'react-router-dom'
import fakeCampGroundData from '../../server/db/fakeCampGroundData';
import CampGround from './CampGround';

const CampGroundsList = ({campgroundData})=>{
console.log('hi', campgroundData)
//const fakeData = fakeCampGroundData.RECDATA


if(campgroundData.length){
  return(

    <div className="CampGroundsListContainer">
      {campgroundData.map((campground)=>{
        if(campground.MEDIA.length && campground.FacilityTypeDescription === "Campground"){
        return <CampGround key={campground.FacilityID} campground={campground}/>
        }
      })}
     </div>
   )

}else{
  return(

    <div className="CampGroundsListContainer">
      
     </div>
   )
  
}


};

export default CampGroundsList
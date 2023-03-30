import axios from "axios";
import { useState, useEffect } from "react";

const PastTrips = ({user})=>{

  const [trips, setTrips] = useState(null)

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = ()=>{
    axios.get(`trips/alltrips/${user.id}`)
    .then((response)=>{
  
      setTrips(response.data)
    })
  }
console.log(trips)

return(
  <div>
    pastTrips 
  </div>
)

}



export default PastTrips
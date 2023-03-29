import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Weatherbar from '../Weatherbar';


const UpcomingTrip = ({user})=>{
  
  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

return(

  <div className="newTripPage">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='welcome'>THIS TRIP IS COMING UP</h3>
     <h4 className='Weatherbar'><Weatherbar /></h4>

   </h1>
   <div className='container'>
   <Link to="/packing-list" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>
   <button className='listButton'>Packing List</button>
   </Link>
   </div>
   </div>
 )

};

export default UpcomingTrip
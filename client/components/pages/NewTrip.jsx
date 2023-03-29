import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import CampGroundsList from '../CampgroundsList';
import axios from 'axios';
import NewTripInput from './NewTripInput';




const NewTrip = ()=>{

  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }
  //set state here to be what the state is inside NewTripInput to grab the input data
  const [chosenUSASTATE, setUSASTATE] = useState('')
  const [ startDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');
  const [ campgroundData, setCampgroundData ] = useState('');

  //a function that we will pass into NewTripInput to set the state here to the values in child
  const updateNewTripState = (USstate, start, end)=>{
    setUSASTATE(USstate);
    setStartDate(start);
    setEndDate(end);
  }

  console.log('lil-state-test:', chosenUSASTATE, startDate, endDate)

  const getAllCampgrounds = ()=>{
    return axios.get(`http://localhost:8080/campgrounds/searchByState?state=${chosenUSASTATE}`)
    .then((response)=>{
      setCampgroundData(response.data.RECDATA)
    })
  }
  

return(

  <div className="newTripPage">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='welcome'>WHERE YA HEADED</h3>
   </h1>
   <hr />
   <NewTripInput updateNewTripState={updateNewTripState} />
   <button onClick={getAllCampgrounds}>Search</button>
   <hr />
   <div className='container'>
   <CampGroundsList campgroundData={campgroundData}/>
   </div>
   </div>
 )

};

export default NewTrip
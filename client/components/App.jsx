import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NewTrip from './pages/NewTrip'
import UpcomingTrip from './pages/UpcomingTrip'
import PackingList from './pages/PackingList'
import axios from 'axios';
import { useState, useEffect } from 'react';


const App = () => {

  const [user, setUser] = useState(null);
  

//this function is grabbing the login information for logging in succesfully
  useEffect(()=>{
    const getUser = ()=>{
    axios.get(`${process.env.REACT_APP_CLIENT_URL}auth/login/success`)
    .then((response)=>{
      console.log(response)
      if(response.status===200){
        return response.data
      }else{
        throw new Error("auth failed")
      }
    }).then((resObj)=>{
      setUser(resObj.user)
    })
    .catch((err)=>{
      console.log('couldnt get the user to the state', err)
    })
  };
    getUser();
  }, []);

console.log(user)

  return (
<BrowserRouter>
<Routes>
{user ? (
  <Route path="/" element={<Home user={user} />} />
) : (
<Route path="/" element={<Login />} />
)}
<Route path="/new-trip" element={<NewTrip />} />
<Route path="/upcoming-trip" element={<UpcomingTrip/>} />
<Route path="/packing-list" element={<PackingList user={user}/>} />
</Routes>
</BrowserRouter>

  )
}






export default App;
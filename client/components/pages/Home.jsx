import { Link } from 'react-router-dom'
import Weatherbar from '../Weatherbar';
import PastTripsBar from './PastTripsBar'
const Home = ({user}) =>{


const logout = () =>{
  window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
}



  

  return(

   <div className="home">
    <div className="topBar">
    <h1 className="weekendertext">WEEKENDER </h1>
      <h1 className='welcome'> Welcome Back {user.displayName.split(" ")[0]}</h1>
      <button className='logoutButton' onClick={(logout)}>Log Out</button>
   </div>
    
    <div className='container'>
      <Link to="/new-trip" style={{textDecoration: 'none'}}>
    <button className="addTripHome" >PLAN YOUR TRIP</button>
    </Link>
    <Link to="/upcoming-trip" style={{textDecoration: 'none'}}>
    <button className="upcomingTrip" >Upcoming Trip</button>
    </Link>
    <PastTripsBar user={user}/>
    </div>
    </div>
  )
};

export default Home
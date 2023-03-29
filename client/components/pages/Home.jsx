import { Link } from 'react-router-dom'
import Weatherbar from '../Weatherbar';

const Home = ({user}) =>{


const logout = () =>{
  window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
}



  

  return(

   <div className="home">
    <h1 className="weekendertext">WEEKENDER
    <button className='logoutButton' onClick={(logout)}>Log Out</button>
      <h3 className='welcome'> Welcome Back {user.displayName.split(" ")[0]}</h3>
    </h1>
    
    <div className='container'>
      <Link to="/new-trip" style={{textDecoration: 'none'}}>
    <button className="addTripHome" >PLAN YOUR TRIP</button>
    </Link>
    <Link to="/upcoming-trip" style={{textDecoration: 'none'}}>
    <button className="upcomingTrip" >Upcoming Trip</button>
    </Link>
    </div>
    </div>
  )
};

export default Home
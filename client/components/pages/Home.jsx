import { Link } from 'react-router-dom'

const Home = ({user}) =>{


const logout = () =>{
  window.open("http://localhost:8080/auth/logout", "_self");
}



  

  return(

   <div className="home">
    <h1 className="weekendertext">WEEKENDER
    <button className='logoutButton' onClick={(logout)}>Log Out</button>
      <h3 className='welcome'> Welcome Back {user.displayName.split(" ")[0]}</h3>
    </h1>
    <div className='container'>
    <button className="addTripHome" >PLAN YOUR TRIP</button>
    <button className="upcomingTrip" >Upcoming Trip</button>
    </div>
    </div>
  )
};

export default Home
import { Link } from 'react-router-dom'



const UpcomingTrip = ()=>{

  const logout = () =>{
    window.open("http://localhost:8080/auth/logout", "_self");
  }

return(

  <div className="newTripPage">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='welcome'>THIS TRIP IS COMING UP</h3>
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
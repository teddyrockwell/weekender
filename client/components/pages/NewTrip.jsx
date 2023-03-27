import { Link } from 'react-router-dom'



const NewTrip = ()=>{

  const logout = () =>{
    window.open("http://localhost:8080/auth/logout", "_self");
  }

return(

  <div className="newTripPage">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='welcome'>WHERE YA HEADED</h3>
   </h1>
   <div className='container'>
   
   </div>
   </div>
 )

};

export default NewTrip
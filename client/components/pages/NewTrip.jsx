import { Link } from 'react-router-dom'
import NewTripInput from './NewTripInput';



const NewTrip = ()=>{

  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

return(

  <div className="newTripPage">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='welcome'>WHERE YA HEADED</h3>
   </h1>
   <hr />
   <NewTripInput />
   <hr />
   <div className='container'>
   
   </div>
   </div>
 )

};

export default NewTrip
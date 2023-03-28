import { Link } from 'react-router-dom'



const ChosenCampground = ()=>{

  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

return(

  <div className="ChosenCampgroundPage">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='welcome'>SWAMPY CAMPGROUND</h3>
   </h1>
  
   </div>
 )

};

export default ChosenCampground
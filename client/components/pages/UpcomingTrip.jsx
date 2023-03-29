import { Link } from 'react-router-dom'
import Weatherbar from '../Weatherbar';


const UpcomingTrip = ({user})=>{

  const [weather, setWeather] = useState({});
  //  api req to weather api
  // function getList() {
  //   axios.get(`/packing/list/642360a9fe014d9942e40212`)
  //     .then(({ data }) => {
  //       console.log(data)
  //       setWeather(data.daily)
  //     })
  //     .catch((err) => {
  //       console.error('Could not GET packing list:', err)
  //     })
  // }

  
  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

return(

  <div className="newTripPage">
   <h1 className="weekendertext">
    <Link to="/" style={{textDecoration: 'none', textEmphasisColor: 'white'}}>WEEKENDER </Link>
   <button className='logoutButton' onClick={(logout)}>Log Out</button>
     <h3 className='welcome'>THIS TRIP IS COMING UP</h3>
     <h4 className='Weatherbar'><WeatherBar /></h4>

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
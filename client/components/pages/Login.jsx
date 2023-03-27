import { Link } from 'react-router-dom'


const Login = () =>{
  const google = ()=>{
    
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/google/`, "_self")
  }
  return(
    <div>
       
      <h1 className="weekendertext"> WEEKENDER
      <button className="googleLogin" onClick={google}>Log In</button>
      </h1>
      <button className="addTrip" >PLAN YOUR TRIP</button>

    </div>
  )
}

export default Login
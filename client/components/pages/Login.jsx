import { Link } from 'react-router-dom'


const Login = () =>{
  const google = ()=>{
    
    window.open("http://localhost:8080/auth/google/", "_self")
  }
  return(
    <div>
       
      <h1 className="weekendertext"> WEEKENDER
      <button className="googleLogin" onClick={google}>Log In</button>
      </h1>
      

    </div>
  )
}

export default Login
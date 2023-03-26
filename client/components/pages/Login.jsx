import { Link } from 'react-router-dom'


const Login = () =>{
  const google = ()=>{
    
    window.open("http://localhost:8080/auth/google/")
  }
  return(
    <div>
       <Link to='/'>Back home</Link>
      <h1 className="loginTitle"> Login with your Google Account</h1>
      <button className="googleLogin" onClick={google}>Log In</button>

    </div>
  )
}

export default Login
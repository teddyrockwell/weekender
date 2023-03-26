import { Link } from 'react-router-dom'


const Login = () =>{
  return(
    <div>
       <Link to='/'>Back home</Link>
      <h1 className="loginTitle"> Login with your Google Account</h1>
      <button className="googleLogin">Log In</button>

    </div>
  )
}

export default Login
import { Link } from 'react-router-dom'

const Home = ({user}) =>{

  if(user){
  return(
<div>
    <Link to='/login'>Back to Login</Link><div className="home">
      <button>Log Out</button>
      <h1> Welcome Back {user.displayName} this is the main homepage</h1>

    </div>
    </div>
  )
  }
}

export default Home
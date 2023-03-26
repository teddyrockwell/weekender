import { Link } from 'react-router-dom'

const Home = () =>{
  return(
<div>
    <Link to='/login'>Back to Login</Link><div className="home">
      <button>Log Out</button>
      <h1> Welcome Back User this is the main homepage</h1>

    </div>
    </div>
  )
}

export default Home
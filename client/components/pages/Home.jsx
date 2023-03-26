import { Link } from 'react-router-dom'

const Home = ({user}) =>{


const logout = () =>{
  window.open("http://localhost:8080/auth/logout", "_self");
}



  //user briefly starts as null when the page first loads without making sure it has values it breaks the page
  if(user){
  return(

   <div className="home">
      <button onClick={(logout)}>Log Out</button>
      <h1> Welcome Back {user.displayName} this is the main homepage</h1>

    </div>
    
  )
  }else{
    return(
     
          <div className="home">
            <button onClick={(logout)}>Log Out</button>
            <h1> this is the main homepage</h1>
      
          </div>
          
        )
  }
}

export default Home
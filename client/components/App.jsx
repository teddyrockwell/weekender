import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'


const App = () => {

  const user = false;

  return (

    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login"/> } />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}



export default App;
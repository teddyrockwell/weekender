import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PackingList(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  function getList() {
    axios.get(`/packing/64231f974da8ee7d18c25517`)
    .then(({ list }) => {
      setList(list)
    })
    .catch((err) => {
      console.error('Could not GET packing list:', err)
    })
  }

  const logout = () => {
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }

  return (

    <div className="newTripPage">
      <h1 className="weekendertext">
        <Link to="/" style={{ textDecoration: 'none', textEmphasisColor: 'white' }}>WEEKENDER </Link>
        <button className='logoutButton' onClick={(logout)}>Log Out</button>
        <h3 className='welcome'>PACKING LIST PAGE</h3>
      </h1>
      <div className='packing-container'>
        <ul className='packing-list'>
          {}
        </ul>
      </div>
    </div>
  )

};

export default PackingList
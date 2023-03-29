import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PackingList(props) {
  // const location = useLocation();
  // const { state } = location
  const [list, setList] = useState([]);

  const weather = {
    time: [
      '2023-03-31',
      '2023-04-01',
      '2023-04-02'
    ],
    precipitation_probability_mean: [
      10,
      55,
      58
    ],
    uv_index_max: [
      7.55,
      7.90,
      7.45
    ],
    temperature_2m_max: [
      84.7,
      85.4,
      82.5
    ],
    temperature_2m_min: [
      64.1,
      70.6,
      69.0
    ],
    weathercode: [
      51,
      51,
      80
    ]
  }
  useEffect(() => {
    createListArray(weather);
  }, []);



  function createListArray(weather) {
    setList(list => [...list, 'Toothpaste/brush', 'Food'])
    if (weather.precipitation_probability_mean.some(prob => prob > 25)) {
      setList(list => [...list, 'Raincoat', 'Umbrella', 'Hat'])
    }
    if (weather.uv_index_max.some(uv => uv > 6)) {
      setList(list => [...list, 'Sunscreen', 'Hat', 'Sunglasses'])
    }
    if (weather.temperature_2m_max.some(temp => temp > 70)) {
      setList(list => [...list, 'Shorts'])
    }
    if (weather.temperature_2m_min.some(temp => temp < 70)) {
      setList(list => [...list, 'Pants', 'Jacket'])
    }
    if (weather.temperature_2m_max.some(temp => temp > 80)) {
      setList(list => [...list, 'Swimsuit', 'Cooler', 'Sandals'])
    }
    if (weather.temperature_2m_min.some(temp => temp < 50)) {
      setList(list => [...list, 'Coat', 'Boots'])
    }
  }


  // function getList() {
  //   axios.get(`/packing/list/642491e631241070f0868f10`)
  //     .then(({ data }) => {
  //       console.log(data)
  //       setList(data.packingList)
  //     })
  //     .catch((err) => {
  //       console.error('Could not GET packing list:', err)
  //     })
  // }

  //setList(list => [...list, data.packingList])


  console.log(list)

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
          {list.map((item, index) => <li key={index}>
            <label>
              <input
                type='checkbox'
              />
              {item}
            </label>
          </li>)}
        </ul>
      </div>
    </div>
  )

};

export default PackingList
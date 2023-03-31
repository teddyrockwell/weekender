import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PackingList({ user }) {
  const location = useLocation();
  const { weatherData } = location.state
  const [list, setList] = useState([]);

  useEffect(() => {
    createListArray(weatherData);
    getPackingList();
  }, []);




  function createListArray(weather) {
    const newList = ['Toothpaste/brush', 'Food'];

    if (weather.precipitation_probability_mean.some(prob => prob > 25)) {
      newList.push('Raincoat', 'Umbrella', 'Hat');
    }
    if (weather.uv_index_max.some(uv => uv > 6)) {
      newList.push('Sunscreen', 'Hat', 'Sunglasses');
    }
    if (weather.temperature_2m_max.some(temp => temp > 70)) {
      newList.push('Shorts');
    }
    if (weather.temperature_2m_min.some(temp => temp < 70)) {
      newList.push('Pants', 'Jacket');
    }
    if (weather.temperature_2m_max.some(temp => temp > 80)) {
      newList.push('Swimsuit', 'Cooler', 'Sandals');
    }
    if (weather.temperature_2m_min.some(temp => temp < 50)) {
      newList.push('Coat', 'Boots');
    }

    setList(newList);
  }



  function getPackingList() {
    axios.get(`/packing/list/${user.id}`)
      .then(response => {
        const packingListItems = response.data.packingList.map(item => item.item);
        setList(list => [...list, ...packingListItems]);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const addItem = () => {
    // get the input field element and value
    const inputField = document.querySelector('.add-item input');
    const inputValue = inputField.value.trim();

    if (inputValue !== '') {
      sendItem(inputValue);

      inputField.value = '';
    }
  };


  function sendItem(item) {
    axios.post(`/packing/list/${user.id}`, {
      item: {
        item: item,
        isComplete: false
      }
    })
      .then(response => {
        setList([...list, item]);
      })
      .catch(error => {
        console.error(error);
      });
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
          {list.map((item, index) => <li key={index}>
            <label>
              <input
                type='checkbox'
              />
              {item}
            </label>
          </li>)}
        </ul>
        <div className='add-item'>
          <input type='text' placeholder='add to packing list' />
          <button onClick={addItem} >Add</button>
        </div>
      </div>
    </div>
  )

};

export default PackingList
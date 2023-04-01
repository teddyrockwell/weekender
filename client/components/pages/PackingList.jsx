import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PackingList() {
  const location = useLocation();
  const { weatherData } = location.state
  const [list, setList] = useState([]);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    // createListArray(weatherData);
    getPackingList();
  }, []);


  console.log(weatherData)

  function createListArray(weather, list) {
    const newList = [];
    console.log(list)
    list.forEach(item => {
      if (item.item === 'Toothpaste/brush' || item.item === 'Food') {
        newList.push(item)
      }
      if ((item.item === 'Raincoat' || item.item === 'Umbrella' || item.item === 'Hat') && weather.precipitation_probability_mean.some(prob => prob > 25)) {
        if (!newList.find(obj => obj.item === item.item)) {
          newList.push(item);
        }
      }
      if ((item.item === 'Sunscreen' || item.item === 'Hat' || item.item === 'Sunglasses') && weather.uv_index_max.some(uv => uv > 6)) {
        if (!newList.find(obj => obj.item === item.item)) {
          newList.push(item);
        }
      }
      if ((item.item === 'Shorts') && weather.temperature_2m_max.some(temp => temp > 70)) {
        if (!newList.find(obj => obj.item === item.item)) {
          newList.push(item);
        }
      }
      if ((item.item === 'Pants' || item.item === 'Jacket') && weather.temperature_2m_min.some(temp => temp < 70)) {
        if (!newList.find(obj => obj.item === item.item)) {
          newList.push(item);
        }
      }
      if ((item.item === 'Swimsuit' || item.item === 'Cooler' || item.item === 'Sandals') && weather.temperature_2m_max.some(temp => temp > 80)) {
        if (!newList.find(obj => obj.item === item.item)) {
          newList.push(item);
        }
      }
      if ((item.item === 'Coat' || item.item === 'Boots') && weather.temperature_2m_min.some(temp => temp < 50)) {
        if (!newList.find(obj => obj.item === item.item)) {
          newList.push(item);
        }
      }
      if (
        item.item !== 'Toothpaste/brush' &&
        item.item !== 'Food' &&
        !['Raincoat', 'Umbrella', 'Hat'].includes(item.item) &&
        !['Sunscreen', 'Hat', 'Sunglasses'].includes(item.item) &&
        item.item !== 'Shorts' &&
        !['Pants', 'Jacket'].includes(item.item) &&
        !['Swimsuit', 'Cooler', 'Sandals'].includes(item.item) &&
        !['Coat', 'Boots'].includes(item.item)
      ) {
        newList.push(item);
      }

    })
    setList(newList);
  }



  function getPackingList() {
    axios.get(`/packing/list/${user.id}`)
      .then(response => {
        console.log(response.data.packingList)
        const packingListItems = response.data.packingList
        // setList(list => [...list, ...packingListItems]);
        createListArray(weatherData, packingListItems)
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
      .then(() => {
        getPackingList();
        //setList([...list, { item: item, isComplete: false }])
      })
      //.then(window.location.reload())
      .catch(error => {
        console.error(error);
      });
  }

  function handleChange(event, item) {
    axios.put(`/packing/list/${user.id}/${item._id}`, {
      item: {
        isComplete: !item.isComplete
      }
    })
      .then(() => {
        setList(prevList => {
          const newList = prevList.map(listItem => {
            if (listItem._id === item._id) {
              return {
                ...listItem,
                isComplete: !listItem.isComplete
              };
            } else {
              return listItem;
            }
          });
          return newList;
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  function deleteItem(item) {
    axios.delete(`/packing/list/${user.id}/${item._id}`)
      .then(() => {
        setList(prevList => prevList.filter(listItem => listItem._id !== item._id));
      })
      .catch(error => {
        console.error(error);
      });
  }


  const logout = () => {
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }
  // onChange={ updateItem }
  return (
    <div className="newTripPage">
      <div className="topBar">
        <h1 className="weekendertext">
          <Link to="/" style={{ textDecoration: 'none', textEmphasisColor: 'white' }}>WEEKENDER </Link>
        </h1>
        <h1 className='welcome'>PACKING LIST</h1>
        <button className='logoutButton' onClick={(logout)}>Log Out</button>
      </div>
      <div className='packing-container'>
        <ul className='packing-list'>
          {list.map((item, index) => (
            <li key={index}>
              <button id='del' onClick={() => deleteItem(item)} >DEL</button>
              <label>
                <input
                  type='checkbox'
                  checked={item.isComplete}
                  onChange={(event) => handleChange(event, item)}
                />
                {item.item}
              </label>
            </li>
          ))}
        </ul>
        <div className='add-item'>
          <input 
          type='text' 
          placeholder='add to packing list'
          onKeyDown={ (event) => event.key === 'Enter' ? addItem() : null }
           />
          <button onClick={addItem} >Add</button>
        </div>
      </div>
    </div>
  );

};

export default PackingList
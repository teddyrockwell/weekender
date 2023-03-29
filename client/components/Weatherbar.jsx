import { useEffect, useState } from 'react';
import axios from 'axios';


const Weatherbar = ({ startDate, endDate, campground })=>{
    const [weather, setWeather] = useState({});
    useEffect(() => {
      //  define getWeather function
      axios.get(`https://api.open-meteo.com/v1/forecast?timezone=auto&latitude=${campground.FacilityLatitude}&longitude=${campground.FacilityLongitude}&daily=precipitation_probability_mean,uv_index_max,temperature_2m_max,temperature_2m_min,weathercode&start_date=${startDate}&end_date=${endDate}&temperature_unit=fahrenheit`)
        .then(res => {
          setWeather(res.data.daily)
        })
        .catch(err => {
          console.log(err)
        })
      //  
    }, [])

   

    if(weather.time){
        return(
            <ul className="WeatherbarContainer">
            {weather.time.map((prop, index) => {
                return (
                <li className="forecast-tombstone" key={weather.time}>
                    <p className="date">Day: {weather.time[index]}</p>
                    <p className="precipitation-probability">Chance of rain: {weather.precipitation_probability_mean[index]}</p>
                    <p className="weathercode">{weather.weathercode[index]}</p>
                    <p className="uv-index">UV: {weather.uv_index_max[index]}</p>
                    <p className="temp-high">High: {weather.temperature_2m_max[index]}</p>
                    <p className="temp-low">Low: {weather.temperature_2m_min[index]}</p>
                </li>  
                )
                
                })}
            </ul>
        )
    }else{
        return (<div></div>)
    }
    
};

export default Weatherbar


import fakeWeatherData from '../../server/db/fakeWeatherData';
// import WeatherbarEntry from './WeatherBarEntry';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Weatherbar = ()=>{
    // const [weather, setWeather] = useState({});
    // console.log(weather)

    // useEffect(() => {
    //   //  define getWeather function
    //   axios.get('https://api.open-meteo.com/v1/forecast?timezone=auto&latitude=29.9759983&longitude=-90.0782127&daily=precipitation_probability_mean,uv_index_max,temperature_2m_max,temperature_2m_min,weathercode&start_date=2023-03-31&end_date=2023-04-02&temperature_unit=fahrenheit')
    //     .then(res => {
    //       console.log(res)
    //       setWeather(res.data.daily)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    //   //  
    // }, [])
    const weather = fakeWeatherData.daily
    // console.log(weather)
    let finalMap =  weather.time.map((prop, index) => {
        weather.time[index]
    })
    console.log(finalMap)
    return(
        <ul className="WeatherbarContainer">
        {weather.time.map((prop, index) => {
            return (
                <li className="forecast-tombstone" key={weather.time}>
                <p className="date">{weather.time[index]}</p>
                <p className="precipitation-probability">{weather.precipitation_probability_mean[index]}</p>
                <p className="weathercode">{weather.weathercode[index]}</p>
                <p className="uv-index">{weather.uv_index_max[index]}</p>
                <p className="temp-high">{weather.temperature_2m_max[index]}</p>
                <p className="temp-low">{weather.temperature_2m_min[index]}</p>
            </li>  
            )
            
            })}
        </ul>
    )
};

export default Weatherbar


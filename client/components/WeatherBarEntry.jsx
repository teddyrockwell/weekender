const WeatherbarEntry = ()=>{

    
    return(
        <li className="forecast-tombstone" key={day.time}>
            <p className="date">{day.time}</p>
            <p className="precipitation-probability">{day.precipitation_probability_mean}</p>
            <p className="weathercode">{day.weathercode}</p>
            <p className="uv-index">{day.uv_index_max}</p>
            <p className="temp-high">{day.temperature_2m_max}</p>
            <p className="temp-low">{day.temperature_2m_min}</p>
        </li>              
     )
    };
    
    export default WeatherbarEntry
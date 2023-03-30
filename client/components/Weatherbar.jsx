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
          console.error(err)
        })
      //  
    }, [])

    const weatherIcons = [
    "https://worldweather.wmo.int/images/24a.png", 
    "https://worldweather.wmo.int/images/22a.png",
    "https://worldweather.wmo.int/images/20.png",
    "https://worldweather.wmo.int/images/16.png",
    "https://worldweather.wmo.int/images/16.png",
    "https://worldweather.wmo.int/images/13.png",
    "https://worldweather.wmo.int/images/12.png",
    "https://worldweather.wmo.int/images/6.png",
    "https://worldweather.wmo.int/images/9.png",
    "https://worldweather.wmo.int/images/8.png",
    "https://worldweather.wmo.int/images/3.png",
    "https://worldweather.wmo.int/images/2.png"
]
    const getWeathercodeIcon = (weathercode) => {
        console.log(weathercode);
        switch(weathercode){
            case 0:
                return weatherIcons[0]
                break;
            //  Mainly clear, partly cloudy, and overcast
            case 1:
                return weatherIcons[1]
                break;
            case 2:
                return weatherIcons[1]
                break;
            case 3:
                return weatherIcons[2]
                break;
            //  Fog and depositing rime fog
            case 45:
                return weatherIcons[3]
                break;
            case 48:
                return weatherIcons[3]
                break;
            //  drizzle
            case 51:
                return weatherIcons[4]
                break;
            case 53:
                return weatherIcons[4]
                break;
            case 55:
                return weatherIcons[4]
                break;
            //  Frezing drizzle
            case 56:
                return weatherIcons[5]
                break;
            case 57:
                return weatherIcons[5]
                break;
            //  Rain: Slight, moderate and heavy intensity
            case 61:
                return weatherIcons[6]
                break;
            case 63:
                return weatherIcons[6]
                break;
            case 65:
                return weatherIcons[6]
                break;
            //  Freezing Rain: Light and heavy intensity
            case 66:
                return weatherIcons[7]
                break;
            case 67:
                return weatherIcons[7]
                break;
            //  Snow fall: Slight, moderate, and heavy intensity
            case 71:
                return weatherIcons[8]
                break;
            case 73:
                return weatherIcons[8]
                break;
            case 75:
                return weatherIcons[8]
                break;
            //  Snow grains
            case 77:
                return weatherIcons[8]
                break;
            //  Rain showers: Slight, moderate, and violent
            case 80:
                return weatherIcons[9]
                break;
            case 81:
                return weatherIcons[9]
                break;
            case 82:
                return weatherIcons[9]
                break;
            //    Snow showers slight and heavy
            case 85:
                return weatherIcons[10]
                break;
            case 86:
                return weatherIcons[10]
                break;
            //  thunderstorms
            case 95:
                return weatherIcons[11]
                break;
            case 96:
                return weatherIcons[11]
                break;
            case 99:
                return weatherIcons[11]
                break;
            default:
                return "https://worldweather.wmo.int/images/35.png"
                break;
        }
    }

    if(weather.weathercode){
        return(
            <ul className="WeatherbarContainer">
            {weather.time.map((prop, index) => {
                return (
                <li className="forecast-tombstone" key={weather.time}>
                    <p className="date">{weather.time[index]}</p>
                    <p className="precipitation-probability">{weather.precipitation_probability_mean[index]}% Prec</p>
                    <p className="weathercode-icon"><img src={getWeathercodeIcon(weather.weathercode[index])}/></p>
                    <p className="uv-index">UV {weather.uv_index_max[index]}</p>
                    <p className="temp-high">High {weather.temperature_2m_max[index]}</p>
                    <p className="temp-low">Low {weather.temperature_2m_min[index]}</p>
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


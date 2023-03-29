import { Link } from 'react-router-dom'
import fakeWeatherData from '../../server/db/fakeWeatherData';
import WeatherbarEntry from './WeatherBarEntry';

const Weatherbar = ()=>{

const fakeData = fakeWeatherData.daily

return(

    <ul className="WeatherbarContainer">
        {fakeData.map(day => {
            <WeatherbarEntry /> })
        }
    </ul>
 )

};

export default Weatherbar


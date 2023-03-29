import fakeWeatherData from '../../server/db/fakeWeatherData';
import WeatherbarEntry from './WeatherBarEntry';

const Weatherbar = ()=>{

const fakeData = fakeWeatherData.daily

//  

return(
    <ul className="WeatherbarContainer">
        {fakeData.map(day => {
            <WeatherbarEntry fakeData={fakeData}/> })
        }
    </ul>
 )
};

export default Weatherbar


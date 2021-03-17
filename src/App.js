import './App.css';
import React, { useState } from 'react';
import WeatherCard from './components/weather-card/weather-card.component';


function App() {
  const [cityName, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const mapRawDataToObject = (data) => {
    return {
      name: data.name,
      date: new Date(data.dt),
      temp: data.main.temp,
      cloudPer: data.clouds.all,
      maxTemp: data.main.temp_max,
      minTemp: data.main.temp_min,
      speed: data.wind.speed,
      sunriseTime: new Date(data.sys.sunrise),
      sunsetTime: new Date(data.sys.sunset)
    };
  }

  const fetchWeatherData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=44ee963ea8384bd561e7cce2a9b68f08&units=imperial`)
      .then(res => res.json())
      .then(data => {
        if(data.cod === '404'){
          setWeatherData({error: 'CITY NOT FOUND'});
          return;
        }
        console.log(data);
        let obj = mapRawDataToObject(data);
        setWeatherData(obj);
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="App">
      <input value={cityName} onChange={(e) => { setCity(e.target.value) }} />
      {cityName.length > 2 && < button onClick={fetchWeatherData}>Get Weather Data</button>}

      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div >
  );
}

export default App;

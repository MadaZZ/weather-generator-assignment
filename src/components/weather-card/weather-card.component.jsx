import React from 'react';
import './weather-card.style.css';

const WeatherCard = (props) => {
    const { weatherData } = props;
    console.log(props);
    const getCloudsData = () => {
        if (weatherData.cloudPer > 0 && weatherData.cloudPer < 30) {
            return 'Mostly Sunny';
        } else {
            return 'Cloudy';
        }
    }
    if (weatherData.error) {
        return (
            <h1> CITY NOT FOUND </h1>
        )
    }

    return (
        <div className='weatherCard'>
            <div className='overview-data-container'>
                <div className='overview-data-upper'>
                    <h2>{weatherData.name}</h2>
                </div>
                <div className='overview-data-lower'>
                    <h1>{weatherData.temp} <span>&#176;</span>F</h1>
                    <span>{getCloudsData()}</span>
                </div>
                <span className='separator'></span>
            </div>

            <div className='overview-data-details'>
               <div className='key-value'>
                   <span className='value'>{weatherData.maxTemp} <span>&#176;</span>F</span>
                   <span className='key'>High</span>
               </div>
               <div className='key-value'>
                   <span className='value'>{weatherData.minTemp} <span>&#176;</span>F</span>
                   <span className='key'>Low</span>
               </div>
               <div className='key-value'>
                   <span className='value'>{weatherData.speed} mph</span>
                   <span className='key'>wind</span>
               </div>
               <div className='key-value'>
                   <span className='value'>{weatherData.cloudPer}%</span>
                   <span className='key'>Rain</span>
               </div>
               <div className='key-value'>
                   <span className='value'></span>
                   <span className='key'></span>
               </div>
               <div className='key-value'>
                   <span className='value'></span>
                   <span className='key'></span>
               </div>
            </div>
        </div>
    )
}

export default WeatherCard;
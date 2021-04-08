import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) =>{
	const [ weatherData, setWeatherData ] = useState([])
	const api_key = process.env.REACT_APP_API_KEY
    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`

	useEffect(() => {
		axios
			.get(url)
			.then(response => {
				console.log(response.data.current.temperature)
				setWeatherData(response.data)
			})
			.catch(error => {
                console.log('error:', error)
            })
	}, [url])
//console.log(weatherData.current.temperature)
console.log('Weather data in Weather component: ', weatherData , '; length: ', weatherData.length)
if (weatherData.length > 0){
	console.log('Weather data, temperature: ', weatherData)}


if (weatherData.length !== 0) {
	return (
		<div>
			<h2>Weather in {city}</h2>
			<div>
				<b>temperature:</b> {weatherData.current.temperature} Celcius
			</div>
			<img src={weatherData.current.weather_icons[0]} alt={weatherData.current.weather_descriptions[0]} />
			<div><b>wind:</b> {weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</div>
		</div>
	) 
	}
	return (null)

}

export default Weather
import React from 'react'
import Language from './Language'
import Weather from './Weather'

const SingleCountry = ({ country }) =>{
	return (
		<div>
			<h1>{country.name}</h1>
			<p>capital {country.capital}</p>
			<p>population {country.population}</p>
			<h2>languages</h2>
			<ul>
				{country.languages.map(language =><Language key={language.iso639_1}
				  language={language.name}/>)}
			</ul>
			<img src={country.flag} alt="flag" className="flag"></img>
			<Weather city={country.capital}/>
		</div>
	) }
//<p>Temperature: {weatherData.current.temperature}</p>
export default SingleCountry


import React from 'react'
import Language from './Language'

const Stats = ({ country }) =>{
	return (
		<div>
			<p>capital {country.capital}</p>
			<p>population {country.population}</p>
			<h2>languages</h2>
			<ul>
				{country.languages.map(language =><Language key={language.iso639_1}
				  language={language.name}/>)}
			</ul>
			<img src={country.flag} alt="flag" className="flag"></img>
		</div>
	) }

export default Stats


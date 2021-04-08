import React, { useState } from 'react'
import Stats from './Stats'
import Weather from './Weather'

const Country = ({ country }) =>{
	const [ showStats, setShowStats ] = useState(false)
	let stats = null
	if (showStats === true){	
		stats = (<><Stats country={country}/>
			<Weather city={country.capital}/></>)
	}

	const showStatsHandler = ( country ) => {
		console.log(country.name)
		setShowStats(!showStats)
		//console.log(stats)
	}

	return (
		<><li>
			{country.name} <button onClick={() => showStatsHandler(country)}>show</button>
			{stats}
		</li>
		</>
	) }

export default Country
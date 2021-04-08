import React from 'react'
import Country from './Country'

const Directory = ({ countriesToShow }) =>{
	return (
		<>
		<ul>
			{countriesToShow.map(country => 
				<Country key={country.alpha2Code}
				country={country}/>
			)}
		  </ul></>
	) }

export default Directory


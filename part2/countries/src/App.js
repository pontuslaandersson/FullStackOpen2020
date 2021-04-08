import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Filter from './components/Filter'
import Directory from './components/Directory'
import SingleCountry from './components/SingleCountry'


const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
	axios
		.get('https://restcountries.eu/rest/v2/all')
		.then(response => {
			console.log('Promise fulfilled')
			setCountries(response.data)
			console.log(response.data)
		})
}, [])

	const handleFilterChange = (event) => {
		console.log(event.target.value)
		setNewFilter(event.target.value)
	}

	const matches = newFilter === '' ? []
	: countries.filter(country => country.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)
	/*if (newFilter !== ''){
		  personsToShow  = filterPersons(persons, newFilter)
	}
	else {
		personsToShow = persons;
	}*/
let results = null
if (matches.length < 10) {
	if (matches.length === 1){
		console.log('Single match', matches[0])
		results = (<SingleCountry country={matches[0]}/>);
	}
	else {
	results = (<Directory countriesToShow={matches}/>);}
}
else {
	results = (<p>Too many matches; specify another filter</p>)
}

  return (
    <div>
	  <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      {results}
    </div>
  )
}

export default App
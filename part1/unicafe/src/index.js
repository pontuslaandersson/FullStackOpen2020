import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, value }) => {
	return (
		<>
			<td>{text}</td><td>{value}</td>
		</>
	)
}

const Statistics = ({ good, neutral, bad, allFeedback }) => {
	if (good === 0 && neutral === 0 && bad === 0){
		return (
		<div>
			<h1>statistics</h1>
			<p>No feedback given.  </p>
		</div>)
		}
	return (
		<div>
			<h1>statistics</h1>
			<table>
				<tbody>
				<tr>
				<Statistic text='Good' value={good}/></tr>
				<tr><Statistic text='Neutral' value={neutral}/></tr>
				<tr><Statistic text='Bad' value={bad}/></tr>
				<tr><Statistic text='All' value={allFeedback}/></tr>
				<tr><Statistic text='Average' value={(good - bad) / allFeedback}/></tr>
				<tr><Statistic text='Positive' value={(good / allFeedback) * 100 + ' %'}/></tr>
				</tbody>
			</table>
		</div>
	)
}

const Button = ({ onClick, text }) => {
	return (
		<button onClick={onClick}>
			{text}
		</button>
	)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [allClicks, setAll] = useState([])
  const [allFeedback, setAll] = useState(0)
  //const [average, setAverage] = useState(0)
  //const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
	setAll(allFeedback + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
	setAll(allFeedback + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
	setAll(allFeedback + 1)
    setBad(bad + 1)
  }


  return (
    <div>
		<h1>give feedback</h1>
		
		<Button onClick={handleGoodClick} text='good'/>
		
		<Button onClick={handleNeutralClick} text='neutral'/>
		<Button onClick={handleBadClick} text='bad'/>
		
		<Statistics good={good} neutral={neutral} bad={bad} allFeedback={allFeedback}/>

		
	  </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
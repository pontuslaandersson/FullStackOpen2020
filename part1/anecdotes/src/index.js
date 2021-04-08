import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
	return (
		<button onClick={onClick}>
			{text}
		</button>
	)
}

const Favourite = ({ highestRated, anecdotes }) => {
	if (highestRated === null) {
		return (
			<>
				<p>No voting has taken place.</p>
			</>
		)
	}
	return (
		<>
		<p>{anecdotes[highestRated]}</p>
		</>
	)
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))

  const [highestRated, setHighestRated] = useState(null)

  const vote = () => {
	  const copy = {...votes}
	  copy[selected] +=1
	  setVotes(copy)
	  if (highestRated === null){
	  setHighestRated(selected)
	}
	  else if (highestRated !== null) {
		  if (copy[selected] > copy[highestRated]) {
		setHighestRated(selected)}
	  }
  }
  const randomAnecdote = (length) => {
	  setSelected ( Math.floor(Math.random() * length ))
	  ///console.log(selected)
  }

  return (
    <div>
		<h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
	  <Button text='vote' onClick={vote}/>
	  <p>has {votes[selected]} votes</p>
	  <Button text='next anecdote' onClick={() => randomAnecdote(props.anecdotes.length)} />
	  <h1>Anecdote with the most votes</h1>
	  <Favourite highestRated={highestRated} anecdotes={props.anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
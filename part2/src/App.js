import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import noteService from './services/notes'

const Footer = () => {
	const footerStyle = {
	  color: 'green',
	  fontStyle: 'italic',
	  fontSize: 16
	}
	return (
	  <div style={footerStyle}>
		<br />
		<em>Note app, Department of Not Knowing Quite What You're Doing, panderss' kitchen 2021</em>
	  </div>
	)
  }

const App = () => {
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('')
	const [showAll, setShowAll] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {
		noteService
			.getAll()
			.then(initialNotes => {setNotes(initialNotes)})
	}, [])

	const addNote = (event) => {
		event.preventDefault()
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
		}
		noteService
		.create(noteObject)
		.then(returnedNote => {
			setNotes(notes.concat(returnedNote))
			setNewNote('')
		})
	}

	const handleNoteChange = (event) => {
		console.log(event.target.value)
		setNewNote(event.target.value)
	}

	const  toggleImportanceOf = (id) => {
		const note = notes.find(n => n.id === id)
		//console.log(note)
		const changedNote = { ...note, important: !note.important }
		//console.log(changedNote)
		noteService
		.update(id, changedNote)
		.then(returnedNote => {
			//console.log(`Returned note: ${returnedNote}`)
			setNotes(notes.map(note => note.id !== id ? note :  returnedNote))
		})
		.catch(error => {
			setErrorMessage(
				`Note '${note.content}' was already removed from server`
			  )
			  setTimeout(() => {
				setErrorMessage(null)
			  }, 5000)
			setNotes(notes.filter(n => n.id !== id))
		  })
	}

	const  notesToShow = showAll
		?  notes
		: notes.filter(note => note.important/* === true*/)

	return (
	  <div>
		<h1>Notes</h1>
		<Notification message={errorMessage} />
		<div>
			<button onClick={() => setShowAll(!showAll)}>
				show {showAll ? 'important only' : 'all'}
			</button>
		</div>
		<ul>
		  {notesToShow.map(note => 
			  <Note key={note.id}
				  note={note}
				  toggleImportance={() => toggleImportanceOf(note.id)}/>
		  )}
		</ul>
		<form onSubmit={addNote}>
			<input 
				value={newNote}
				onChange={handleNoteChange}/>
			<button type="submit">save</button>
		</form>
		<Footer />
	  </div>
	)
  }

  export default App
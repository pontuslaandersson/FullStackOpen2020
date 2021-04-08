import React from 'react'

const Course = ({ course }) => {
	return (
		<div>
      <Header course={course.name} />
	  <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
	)
}
const Header = ({ course }) => {
	return (
		<div>
			<h2>{course}</h2>
		</div>
	)
}

const Part = ({ part }) => {
	return (
		<div>
			<p>
        		{part.name} {part.exercises}
      		</p>
		</div>
	)
}

const Content = ({ parts }) => {
	return (
	<div>
		{parts.map(part => 
			  <Part key={part.id}
				  part={part}/>
		  )}
	  </div>
	  )
}

const Total = ({ parts }) => {
	let initialValue = 0
	let sum = parts.reduce(
		(accumulator, currentValue) => accumulator + currentValue.exercises
		, initialValue
	)
	
	return (
		<div>
			<strong><p>total of {sum} exercises</p></strong>
		</div>
	)
}

export default Course
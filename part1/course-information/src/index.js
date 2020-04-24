import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.parts[0]} {props.exercises[0]}</p>
      <p>{props.parts[1]} {props.exercises[1]}</p>
      <p>{props.parts[2]} {props.exercises[2]}</p>
    </>
  )
}

const Footer = (props) => {
  let sum = props.exercises.reduce((accumulator, currentValue) => accumulator + currentValue)
  return(
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React','Using props to pass data','State of a component']
  const exercises = [10,7,14]
  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts} exercises = {exercises}/>
      <Footer exercises = {exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

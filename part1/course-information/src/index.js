import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) =>{
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part = {props.parts1.name} exercise = {props.parts1.exercises}/>
      <Part part = {props.parts2.name} exercise = {props.parts2.exercises}/>
      <Part part = {props.parts3.name} exercise = {props.parts3.exercises}/>
    </>
  )
}

const Footer = (props) => {
  let sum = Number(props.parts1 + props.parts2 + props.parts3)
  return(
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content parts1 = {part1} parts2 = {part2} parts3 = {part3}/>
      <Footer parts1 = {part1.exercises} parts2 = {part2.exercises} parts3 = {part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

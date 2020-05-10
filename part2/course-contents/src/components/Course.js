import React from 'react'

const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }

  const Total = ({ total }) => {
    const sum = total.reduce((s,p)=>
    {
      return s+p.exercises
    },0)
    return(
      <p>Number of exercises {sum}</p>
    )
  }

  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }

  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </div>
    )
  }

  const Course = ({courses}) => {
    return(
      <div>
        {courses.map(course => (
          <React.Fragment key={course.id}>
            <Header name ={course.name} />
            <Content parts = {course.parts}/>
            <Total total ={course.parts} />
          </React.Fragment>
        ))}
      </div>
    )
  }

export default Course
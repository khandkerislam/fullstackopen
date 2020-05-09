import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({text,handleClick}) => (
    <button onClick = {handleClick}>
      {text}
    </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  const decreaseByOne = () => setCounter(counter - 1)

  const setToZero = () => setCounter(0)

  return (
  <div>
    <Display counter = {counter}/>
    <Button
      handleClick={increaseByOne}
      text='plus'
    />
    <Button
      handleClick={setToZero}
      text='zero'
    />
    <Button
      handleClick={decreaseByOne}
      text='minus'
    />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

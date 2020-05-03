import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => <button onClick = {onClick}> {text} </button>

const App = () => {
  // save lciks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = ()=> {setGood(good + 1)}
  const handleNeutral = ()=> {setNeutral(neutral + 1)}
  const handleBad = ()=> {setBad(bad + 1)}


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick = {handleGood} text = 'good' />
      <Button onClick = {handleNeutral} text = 'neutral' />
      <Button onClick = {handleBad} text = 'bad' />
      <h1>Statistics</h1>
      <p>Good {good} </p>
      <p>Neutral {neutral} </p>
      <p>Bad {bad} </p>
    </div>

  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)

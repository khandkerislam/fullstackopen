import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({text,value}) => {
  return(
    <p>{text} {value}</p>
  )
}

const Statistics = ({good, bad, neutral}) => {
  if (good === 0 && bad === 0 && neutral ===  0) {
    return (
      <p>No feedback given</p>
    )
  }
  return(
  <>
    <h1>Statistics</h1>
    <Statistic text = 'Good' value = {good} />
    <Statistic text = 'Neutral' value = {neutral} />
    <Statistic text = 'Bad' value = {bad} />
    <Statistic text = 'All' value = {good + neutral + bad} />
    <Statistic
      text = 'Average' value = {isNaN((good*1 + neutral*0 + bad*(-1)) / (good + neutral + bad)) ? 0 : (good*1 + neutral*0 + bad*(-1)) / (good + neutral + bad)}
    />
    <Statistic text = 'Positive' value = {isNaN(good / (good + neutral + bad) * 100) ? 0 : good / (good + neutral + bad) } />
  </>
  )
}

const App = () => {
  // save lciks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>

  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)

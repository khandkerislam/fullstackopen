import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Anecdote = ({anecdote,header,vote}) => (
  <>
    <h3>{header}</h3>
    <p>{anecdote}</p>
    <p>has {vote}</p>
  </>
)

const App = ({anecdotes,votes}) => {

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(votes);

  const getRandomNumber = () => {
    let rndNumber;
    while (true) {
      rndNumber = Math.floor(Math.random() * anecdotes.length);
      if(selected !== rndNumber){
        return rndNumber;
      }
    }
  }

  const handleClickNext = () => {
    setSelected(getRandomNumber());
  }

  const handleClickVote = (selected) => {
    setVote(vote.map((item,index) =>{
      if(index === selected){
        return item + 1;
      }
      else{
        return item;
      }
    }))
  }

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} header={"Anecdote of the Day"} vote={vote[selected]} />
      <Button onClick={()=>handleClickVote(selected)} text = 'vote' yaabbadoo='lol'/>
      <Button onClick={()=>handleClickNext()} text='next anecdote'/>
    </div>
  )
}

const points = [0,0,0,0,0,0];

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} votes={points}/>,
  document.getElementById('root')
)
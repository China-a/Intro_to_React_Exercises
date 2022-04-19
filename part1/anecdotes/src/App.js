import React, { useState } from 'react'
// Anecdotes - Exercises 1.12
// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]
   
//   const [selected, setSelected] = useState(0)

//   let changeline = () => {
//     setSelected(Math.floor(Math.random()*anecdotes.length))
//   }
//   return (
//     <div>
//       {anecdotes[selected]} <br/>
//       <button onClick={changeline}> next anecdote </button>
//     </div>
//   )
// }

// Anecdotes - Exercise 1.13
// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]
   
//   const [selected, setSelected] = useState(0)
//   let [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

//   let changeline = () => {
//     setSelected(Math.floor(Math.random()*anecdotes.length))
//   }

// let countPoints = () => {
//   const copy = [...points]
//   copy[selected]++
//   setPoints(copy)
// }
  
//   return (
//     <div>
//       {anecdotes[selected]} <br/>
//     <p> has {points[selected]} votes  </p>
//     <button onClick={countPoints}>vote</button>
//     <button onClick={changeline}> next anecdote </button> 
//     </div>
//   )
// }

// Anecdote = Exercise 1.14
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  let [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  let changeline = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }
 
  let hasTheMostPoints = () => {
    let allthepoints = -1, allthepointskey = -1 
    for (let key in points) {
      if (points[key] > allthepoints) {
        allthepointskey = key 
        allthepoints = points[key]
      }
    }
    return allthepointskey
  }
  
  let countPoints = () => {
  const copy = [...points]
  copy[selected]++
  setPoints(copy)
  }


  
  return (
    <div>
      {anecdotes[selected]} <br/>
    <p> has {points[selected]} votes  </p>
    <button onClick={countPoints}>vote</button>
    <button onClick={changeline}> next anecdote </button> <br/>
    <p> Anecdote with the most points </p>
    <p> is {anecdotes[hasTheMostPoints()]} </p>
   
    </div>
  )
}


export default App;

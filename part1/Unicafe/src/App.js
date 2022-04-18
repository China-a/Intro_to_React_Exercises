import React, { useState } from 'react'
// Unicafe - Exercise 1.6
// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//     <h2>give feedback</h2>
//     <button onClick={() => setGood(good + 1)}> good</button>
//     <button onClick={() => setNeutral(neutral +1)}> neutral</button>
//     <button onClick={() => setBad(bad + 1)}> bad</button>
//  <h2>statistics</h2>
//   <div>good {good}</div>
//    <div>neutral {neutral}</div>
//    <div>bad {bad}</div>
//     </div>
//   )
// }

// Unicafe = Exercise 1.7
// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//     <h2>give feedback</h2>
//     <button onClick={() => setGood(good + 1)}> good</button>
//     <button onClick={() => setNeutral(neutral +1)}> neutral</button>
//     <button onClick={() => setBad(bad + 1)}> bad</button>
//     <h2>statistics</h2>
//     <div>good {good}</div>
//     <div>neutral {neutral}</div>
//     <div>bad {bad}</div>
//     <div>all {good + neutral + bad}</div>
//     <div>average {(good - bad)/(good + neutral + bad)}</div>
//     <div>positive {(good + neutral )/ (good + neutral + bad)} % </div>
//     </div>
//   )
// }

// Unicafe - Exericse 1.8
// const Statistics = (props) => {
//   return (
//     <div> 
//     good {props.good} <br/>
//     neutral {props.neutral} <br/>
//     bad {props.bad} <br/>
//     all {props.all} <br/>
//     average {props.average} <br/>
//     positive {props.positive} % 
//     </div>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//     <h2>give feedback</h2>
//     <button onClick={() => setGood(good + 1)}> good</button>
//     <button onClick={() => setNeutral(neutral +1)}> neutral</button>
//     <button onClick={() => setBad(bad + 1)}> bad</button>
//     <h2>statistics</h2>
    
//     <Statistics 
//     good={good}
//     neutral={neutral}
//     bad={bad}
//     all={good + neutral + bad}
//     average={(good - bad)/( good + neutral + bad)} 
//     positive={(good + neutral )/ (good + neutral + bad)} 
//     />
//   </div>
//   )
// }
// Unicafe - Exercise 1.9
// const Statistics = (props) => {
//   if ( props.all == 0)
//   return (
//     <div>
//       No feedback given
//     </div>
//   )
  
//   else 

//   return (
//     <div> 
//     good {props.good} <br/>
//     neutral {props.neutral} <br/>
//     bad {props.bad} <br/>
//     all {props.all} <br/>
//     average {props.average} <br/>
//     positive {props.positive} % 
//     </div>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//     <h2>give feedback</h2>
//     <button onClick={() => setGood(good + 1)}> good</button>
//     <button onClick={() => setNeutral(neutral +1)}> neutral</button>
//     <button onClick={() => setBad(bad + 1)}> bad</button>
//     <h2>statistics</h2>
    
//     <Statistics 
//     good={good}
//     neutral={neutral}
//     bad={bad}
//     all={good + neutral + bad}
//     average={(good - bad)/( good + neutral + bad)} 
//     positive={(good + neutral )/ (good + neutral + bad)} 
//     />
//   </div>
//   )
// }

// Unicafe - Exercise 1.10
// const Statistics = ({good, neutral, bad}) => {
//    let all = good + neutral + bad 
//    let average = (good - bad)/ all 
//    let positive = (good + neutral )/ (good + neutral + bad)

//    if (all === 0 )
//    return (
//         <div>
//           No feedback given
//         </div>
//    )
   
//    else 
  
//    return(
//     <div>
//       <table>
//         <tbody>
//       <StatisticLine text="good" value ={good} />
//       <StatisticLine text="neutral" value ={neutral} />
//       <StatisticLine text="bad" value ={bad} />
//       <StatisticLine text="all" value ={all} />
//       <StatisticLine text="average" value ={average} />
//       <StatisticLine text="positive" value ={positive} /> 
//     </tbody>
//     </table>
//     </div>
//   )
// }

// let StatisticLine = ({text, value}) => {
//   return(
//     <tr><td>{text}</td><td>{value}</td></tr>
//   )
// }

// let Button = ({text, clicked}) => {
// return (
//   <button onClick={clicked}> {text} </button>
// )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//     <h2>give feedback</h2>
//     <Button text="good" clicked={() => setGood(good + 1)}/>
//     <Button text="neutral" clicked={() => setNeutral(neutral +1)}/>
//     <Button text="bad" clicked={() => setBad(bad + 1)} />
//     <h2>statistics</h2>
//     <Statistics good={good} neutral={neutral} bad={bad} />

//   </div>
//   )
// }

// Unicafe - Exercise 1.11
const Statistics = ({good, neutral, bad}) => {
  let all = good + neutral + bad 
  let average = (good - bad)/ all 
  let positive = (good + neutral )/ (good + neutral + bad)

  if (all === 0 )
  return (
       <div>
         No feedback given
       </div>
  )
  
  else 
 
  return(
   <div>
     <table>
       <tbody>
     <StatisticLine text="good" value ={good} />
     <StatisticLine text="neutral" value ={neutral} />
     <StatisticLine text="bad" value ={bad} />
     <StatisticLine text="all" value ={all} />
     <StatisticLine text="average" value ={average} />
     <StatisticLine text="positive" value ={positive} /> 
   </tbody>
   </table>
   </div>
 )
}

let StatisticLine = ({text, value}) => {
 return(
   <tr><td>{text}</td><td>{value}</td></tr>
 )
}

let Button = ({text, clicked}) => {
return (
 <button onClick={clicked}> {text} </button>
)
}

const App = () => {
 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)

 return (
   <div>
   <h2>give feedback</h2>
   <Button text="good" clicked={() => setGood(good + 1)}/>
   <Button text="neutral" clicked={() => setNeutral(neutral +1)}/>
   <Button text="bad" clicked={() => setBad(bad + 1)} />
   <h2>statistics</h2>
   <Statistics good={good} neutral={neutral} bad={bad} />

 </div>
 )
}


export default App;


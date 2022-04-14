// Course Inoformation - Exercise 1.1 

const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
       {/* <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p> */}
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    <Header course={course} />
    <Content part1={part1} exercises1={exercises1} part2={part2}  exercises2={exercises2} part3={part3} exercises3={exercises3}/>
    <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
  </div>

  )
}
  
//Course Information - Exercise 1.2
const App = () => {
    const course = {
      title: 'Half Stack application development',
      info: [
        { line: 'Fundamentals of React', exercises: 10},
        { line: 'Using props to pass data',exercises: 7},
        { line: 'State of a component', exercises: 14 }
      ]
    }
    return (
      <div>
        <Header course={course.title} />
        <Content info={course.info}/>
        <Total info={course.info} />
      </div>
    )
  }
const Header = (props) => {
    return (
      <div>
        <p>{props.course}</p>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <Part info={props.info[0].line} exercises={props.info[0].exercises} />
        <Part info={props.info[1].line} exercises={props.info[1].exercises}/>
        <Part info={props.info[2].line} exercises={props.info[2].exercises}/>
      </div>
    )
  }
  const Part = (props) => {
    return (
      <div>
        <p>
          {props.info} {props.exercises}
        </p>
      </div>
    )
  }
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.info[0].exercises + props.info[1].exercises + props.info[2].exercises}</p>
      </div>
    )
  }
  
export default App;
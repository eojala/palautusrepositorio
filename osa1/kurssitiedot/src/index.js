import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return(
  <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
  <div>
  <Part name={props.parts[0].name} howMany={props.parts[0].exercises}/>
  <Part name={props.parts[1].name} howMany={props.parts[1].exercises}/>
  <Part name={props.parts[2].name} howMany={props.parts[2].exercises}/>
  </div>
  )
  }


const Part = (props) => {
  return(
    <p>     
     {props.name} {props.howMany}
    </p>
  )
}

 const Total = (props) => {
   console.log(props.numero[0].exercises)
   return(
     <div>
    <p>
     Total {props.numero[0].exercises + props.numero[1].exercises + props.numero[2].exercises}
    </p>
    </div>
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

  let kurssit = [part1, part2, part3]

  return (
    <div>
      <Header course={course}/>
      <Content parts={kurssit}/>
      <Total numero={kurssit}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
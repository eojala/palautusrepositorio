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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]



  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total numero={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
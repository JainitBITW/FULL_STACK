const Header = (props) => {
  console.log(props.name)
  return  <h1>{props.name}</h1>
  
  
}

const Part =(prop) => {
  return(
    <>
      <p> {prop.name}     {prop.exercises}</p>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  )
}

const Total = props=> {
  return(
    <p>Total Number of Exercises {props.total}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  // console.log(course.parts)
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total = {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
      
    </div>

  )
}

export default App
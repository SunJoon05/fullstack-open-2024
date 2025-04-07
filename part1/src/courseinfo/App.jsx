// 1.1-1.5 Information of course

const App = () => {
  const course =
  {
    name: "Half Stack application development",
    parts:
      [
        { name: 'Fundamentos of React', exercises: 10 },
        { name: 'Using props to pass data', exercises: 7 },
        { name: 'State of a component', exercises: 14 }
      ]
    ,
  }

  return (
    <div>
      <Header header={course.name}></Header>
      <Content content={course.parts}></Content>
      <Total total={course}></Total>
    </div>
  );
};

// => header component definition and access course props
const Header = (props) => {
  // => definition of name arr props, access to props 
  const name = props.header;
  // return html code of component and access to parts
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

const Content = (props) => {
  const parts = props.content;

  return (
    <div>
      {
        parts.map((element, index) => (
          <p key={index}>
            {element.name} {element.exercises}
          </p>
        ))
      }
    </div>
  );
};

const Total = (props) => {
  const name = 'Total of exercises';

  const total = (props) => {
    let value = 0;
    props.total.parts.forEach(element => {
      value += element.exercises;
    })
    return value;
  }

  return (
    <div>
      <p>{name} {total(props)}</p>
    </div>
  );
};

export default App;

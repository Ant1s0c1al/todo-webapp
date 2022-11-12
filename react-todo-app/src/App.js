import { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Todos from './components/Todos';
//import logo from './logo.svg';
import './App.scss';

function App() {
  // React(Hooks) useState | Returns a stateful value
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Lorem qui minim labore adipisicin',
      important: false,
    },
    {
      id: 2,
      text: 'Pora qui minirwwm lskodre pisiiwf',
      important: true,
    },
    {
      id: 3,
      text: 'Boram qumddi miniffm labore adipd',
      important: true,
    },
  ])

  // #Function • Delete
  // #Function • Important
  // #Function • Create

  return (
    <>

      {/* Bootstrap Navigation Bar */}
      <NavBar />

      {/* Main App */}
      <Container>
        <Todos todos={todos} />
      </Container>

    </>
  );
}

export default App;

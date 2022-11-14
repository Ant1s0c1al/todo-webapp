import { useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Todos from './components/Todos';
import CreateTodo from './components/CreateTodo';
import CreateTodoHeader from './components/CreateTodoHeader';
//import logo from './logo.svg';
import './App.scss';

function App() {
  // React(Hooks) useState | Returns a stateful value
  const [showCreateTodo, setShowCreateTodo] = useState(false);
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
  const deleteTodo = (id) => {
    console.log('Delete|# ', id);
    setTodos(todos.filter(
      (todoitem) => todoitem.id !== id)
    )
  }

  // #Function • Important
  const toggleImportant = (id) => {
    console.log('Toggle Important|# ', id);
    setTodos(todos.map(
      (todoitem) => todoitem.id === id
        ? { ...todoitem, important: !todoitem.important }
        : todoitem
    ))
  }

  // #Function • Create
  const createTodo = (todoitem) => {
    console.log(todoitem);
    // Generate Random #[ID]
    const id = Math.floor(Math.random() * 10000) + 1
    console.log('Random ID|# ', id)
    const newTodo = { id, ...todoitem }
    setTodos([...todos, newTodo])
  }

  return (
    <>

      {/* Bootstrap Navigation Bar */}
      <NavBar />

      {/* Main App */}
      <Container>

        {todos.length > 0 ?
          <Todos
            todos={todos}
            onDelete={deleteTodo}
            onToggle={toggleImportant}
          /> : <Alert
            className='mt-3 text-center'
            key='danger'
            variant='danger'
          > No Todo Available!
          </Alert>
        }

        <CreateTodoHeader
          showCreate={showCreateTodo}
          onCreate={() => setShowCreateTodo(!showCreateTodo)}
        />

        {showCreateTodo && <CreateTodo onCreate={createTodo} />}

      </Container>

    </>
  );
}

export default App;

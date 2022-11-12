import TodoItem from './TodoItem';

const Todos = ({ todos }) => {
  return (
    <>
      {todos.map((todoitem) => (<TodoItem key={todoitem.id} todoitem={todoitem} />))}
    </>
  );
}

export default Todos;

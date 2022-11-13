import TodoItem from './TodoItem';

const Todos = ({ todos, onDelete }) => {
  return (
    <>
      {todos.map(
        (todoitem) => (
          <TodoItem
            key={todoitem.id}
            todoitem={todoitem}
            onDelete={onDelete}
          />
        )
      )}
    </>
  );
}

export default Todos;

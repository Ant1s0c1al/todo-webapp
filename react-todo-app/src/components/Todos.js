import TodoItem from './TodoItem';

const Todos = ({ todos, onDelete, onToggle }) => {
  return (
    <>
      {todos.map(
        (todoitem) => (
          <TodoItem
            key={todoitem.id}
            todoitem={todoitem}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        )
      )}
    </>
  );
}

export default Todos;

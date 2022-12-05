import TodoItem from './todo-item';

// TypeScript | Types
interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

// Data Fetching
async function getTodos() {
  const res = await fetch('http://localhost:5000/todos');
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('#Failed to fetch data!');
  }

  const todos: Todo[] = await res.json();
  return todos;
}

// async
export default async function TodoList() {
  const todos = await getTodos();

  return (
    <>
      <main>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} {...todo} />
          ))}
        </ul>
      </main>
    </>
  );
}

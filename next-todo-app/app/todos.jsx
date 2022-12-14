/* Todo List */
import Todo from './todo';

// ### Data Fetching ###
async function getData() {
  const res = await fetch('http://localhost:5000/todos');
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('ERROR: Failed to fetch data!');
  }

  const todos = await res.json();
  return todos;
}

// ### Async Function ###
export default async function Todos() {
  const todos = await getData();

  return (
    <>
      <section>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} {...todo} />
          ))}
        </ul>
      </section>
    </>
  );
}

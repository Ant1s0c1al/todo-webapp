/* TODO List COMPONENT */
import TodoItem from './todo-item';

// (TEMPRARY) Method Till New Method Implemented!
async function getData() {
  const res = await fetch('http://localhost:5000/todos');

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Todos() {
  const todos = await getData();

  return (
    <>
      <main>
        <section>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} {...todo} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

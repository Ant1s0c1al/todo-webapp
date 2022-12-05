/* [CLIENT] COMPONENT */
'use client';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

// (TEMPRARY) Method Till New Method Implemented!
async function getData(id) {
  const data = await fetch(`http://localhost:5000/todos/${id}`);

  // Recommendation: handle errors
  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}

// [PUT] Request | Toggle Boolean Value >>> completed
async function updateData(id, refresh) {
  const toggleTodoId = await getData(id);
  const updateTodo = { ...toggleTodoId, completed: !toggleTodoId.completed }

  await fetch(`http://localhost:5000/todos/${id}`, {
    method: 'POST',
    body: JSON.stringify({ updateTodo }),
  });

  refresh();
}


// Pass in 'todo' as a prop
export default function TodoItem({ todo }) {
  const router = useRouter();

  return (
    <>
      <div className={styles.grid}>
        <div className={`${styles.card}`} href='#'>
          <div className='d-flex justify-content-between'>
            <h2>TODO#{todo.id}</h2>
            <input
              type='checkbox'
              className='form-check-input'
              checked={todo.completed}
              onChange={(e) => updateData(todo.id, e.target.checked, router.refresh)}
            />
          </div>
          <span
            className='badge rounded-pill text-bg-primary text-white'
          > +XP 100
          </span>
          <p className='pt-3'>{todo.text}</p>
        </div>
      </div>
    </>
  );
}

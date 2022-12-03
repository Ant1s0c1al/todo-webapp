/* [CLIENT] COMPONENT */
'use client';
import styles from './page.module.scss';

// Pass in 'todo' as a prop
export default function TodoItem({ todo }) {
  return (
    <>
      <div className={styles.grid}>
        <div className={`${styles.card}`} href='#'>
          <div className='d-flex justify-content-between'>
            <h2>TODO#{todo.id}</h2>
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
            />
          </div>
          <span className='badge rounded-pill text-bg-primary text-white'>+XP 100</span>
          <p className='pt-3'>{todo.text}</p>
        </div>
      </div>
    </>
  );
}

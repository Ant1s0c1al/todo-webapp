'use client';

// TypeScript | Types
interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

import styles from '../page.module.scss';

// Pass in a Prop >>> todo
export default function TodoItem(todo: Todo) {
  return (
    <>
      <div className={styles.grid}>
        <div className={`${styles.card}`} href='#'>
          <div className='d-flex justify-content-between'>
            <h2>TODO#{todo.id}</h2>
            <input
              type='checkbox'
              className='form-check-input'
            />
          </div>
          <span
            className='badge rounded-pill text-bg-primary text-white'
          > +XP 10
          </span>
          <p className='pt-3'>{todo.text}</p>
        </div>
      </div>
    </>
  );
}

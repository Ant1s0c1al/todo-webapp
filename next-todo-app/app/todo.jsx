/* Individual Todo Item */
'use client';

//import Link from 'next/link';
import styles from './page.module.scss';

export default function Todo(todo) { // Pass 'todo' as Prop
  return (
    <>
      <section>
        <div className={styles.grid}>
          <div className={styles.card}>

            <div className='d-flex justify-content-between'>
              <h2>#{todo.id}</h2>
              <input type='checkbox' className='form-check-input' />
            </div>

            <p>{todo.text}</p>

          </div>
        </div>
      </section>
    </>
  );
}

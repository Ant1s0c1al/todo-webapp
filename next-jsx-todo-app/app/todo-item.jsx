/* [CLIENT] COMPONENT */
'use client';
import styles from './page.module.scss';

// Pass in 'todo' as a prop
export default function TodoItem({ todo }) {
  return (
    <>
      <div className={styles.grid}>
        <a className={`${styles.card}`} href='#'>
          <h2>#{todo.id}</h2>
          <p>{todo.text}</p>
        </a>
      </div>
    </>
  );
}

/* Individual Todo Item */
'use client';

//import { useRouter } from 'next/navigation';
//import { useState } from 'react';

import Link from 'next/link';
import styles from './page.module.scss';

export default function Todo(todo) { // Pass 'todo' as Prop
  //const router = useRouter();

  return (
    <>
      <section>
        <div className={styles.grid}>
          <div className={styles.card}>

            <div className='d-flex justify-content-between'>
              <Link href={`/${todo.id}`}>
                <h2>#{todo.id}</h2>
              </Link>
              <input type='checkbox' className='form-check-input' />
            </div>

            <span className='badge rounded-pill text-bg-primary mb-3'>
              +100 XP
            </span>

            <p>{todo.text}</p>

            <div className='d-flex justify-content-end'>
              <button className='btn btn-outline-danger mt-3'>
                DELETE
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

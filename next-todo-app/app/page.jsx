/* [Home] */
import { Suspense } from 'react';
import Loading from './loading';
//import styles from './page.module.scss';
import Todos from './todos';

export default function Home() {
  return (
    <>
      <section className='container mt-4'>
        <Suspense fallback={<Loading />}>
          <Todos />
        </Suspense>
      </section>
    </>
  );
}

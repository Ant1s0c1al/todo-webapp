/* [Home] */
import styles from './page.module.scss';
import Todos from './todos';

export default function Home() {
  return (
    <>
      <section className='container mt-4'>
        <Todos />
      </section>
    </>
  );
}

/* [Home] page.jsx | COMPONENT */
import Todos from './todos';

export default function Home() {
  return (
    <>
      <main className='container'>
        <section>
          <div className='text-center'>
            <small className='mt-3'>OPENSOURCE PROJECT | MIT</small>
            <h1 className='mb-4'>app/page.jsx</h1>
          </div>
          <Todos />
        </section>
      </main>
    </>
  );
}

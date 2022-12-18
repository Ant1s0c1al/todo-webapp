import React from 'react';

async function TodoItemPage({ params: { id } }) {
  return (
    <>
      <section className='container'>
        <h1>TODO#{id}</h1>
      </section>
    </>
  );
}

export default TodoItemPage;

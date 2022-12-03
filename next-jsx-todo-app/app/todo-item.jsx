/* [CLIENT] COMPONENT */
'use client';

// Pass in 'todo' as a prop
export default function TodoItem({ todo }) {
  return (
    <>
      <div className='text-center'>
        <p>{todo.text}</p>
      </div>
    </>
  );
}

'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Likes {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
}

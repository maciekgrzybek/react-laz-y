import React, { useState } from 'react';

const TestComponent: React.FC = () => {
  const [val, setVal] = useState(1);
  return (
    <div>
      <h1>{val}</h1>
      <button onClick={() => setVal(val => val + 1)}>Add 1</button>
    </div>
  );
};

export default TestComponent;

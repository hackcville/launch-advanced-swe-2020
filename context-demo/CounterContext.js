import React, { createContext, useState } from 'react';

const CounterContext = createContext();
export default CounterContext;

export function CounterProvider({ children }) {
  const [count, setCount] = useState(10);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

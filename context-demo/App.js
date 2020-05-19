import React, { useContext } from 'react';
import CounterContext, { CounterProvider } from './CounterContext';

export default function App() {
  return (
    <CounterProvider>
      <div>
        <CounterDisplay />
        <CounterActions />
      </div>
    </CounterProvider>
  );
}

function CounterDisplay() {
  const { count } = useContext(CounterContext);
  return <h1>Count: {count}</h1>;
}

function CounterActions() {
  const { increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

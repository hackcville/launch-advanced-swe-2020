## Basic Counter Example

App.js:

```js
import React from 'react';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Content from './Content';
import CountActions from './CountActions';

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Content />
      <CountActions />
    </Provider>
  );
}
```

reducer.js:

```js
const initialState = 0;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    case 'SET_COUNT': {
      return action.value;
    }
    default: {
      return state;
    }
  }
}
```

CountDisplay.js:

```js
import React from 'react';
import { useSelector } from 'react-redux';

export default function Content() {
  const count = useSelector((state) => state);
  return <h1>Count: {count}</h1>;
}
```

CountActions.js:

```js
import React from 'react';
import { useDispatch } from 'react-redux';

export default function ContentActions() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'SET_COUNT', value: 10 })}>
        Set to 10
      </button>
    </div>
  );
}
```

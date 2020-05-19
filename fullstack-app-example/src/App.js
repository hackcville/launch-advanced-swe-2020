import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch('/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <p>{message}</p>
    </div>
  );
}

export default App;

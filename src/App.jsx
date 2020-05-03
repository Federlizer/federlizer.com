import React from 'react';

const App = () => {
  const now = new Date();

  return (
    <div>
      <p>Welcome to federlizer.com</p>
      <p>{now.toString()}</p>
    </div>
  );
}

export default App;

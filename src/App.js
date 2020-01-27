import React from 'react';
import './App.css';
import Login from './containers/Login/Login';

function App() {
  const name = "Danilo";
  return (
    <div className="App">
      <Login name={name} age={28} />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import React from 'react';
import Movies from './Movies/Movies.jsx';

function App() {
  var helloSai = <h1>Hello Sai</h1>;
  return (
    <div className="App">
      {helloSai}
      <Movies></Movies>
    </div>
  );
}

export default App;

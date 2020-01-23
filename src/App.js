import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './Grid'



function App() {
  let bigBigArray = [];
  let i;
  for (i = 0; i < 100; i++) {
    let cellValues = [];
    let j;
    for (j = 0; j < 100; j++) {
      cellValues.push(Math.floor(Math.random() * 500))
    }
    bigBigArray.push({ cellValues: cellValues });
  }
  return (
    <div className="App">
      <header className="App-header">
        <Grid bigBigArray={bigBigArray} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

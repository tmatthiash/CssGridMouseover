import React from 'react';
import './App.css';
import Grid from './Grid'



function App() {

  // Generate big pile of data to make a grid out of
  let bigBigArray = [];
  let i;
  for (i = 0; i < 200; i++) {
    let cellValues = [];
    let j;
    for (j = 0; j < 200; j++) {
      cellValues.push(Math.floor(Math.random() * 500))
    }
    bigBigArray.push({ cellValues: cellValues });
  }
  return (
    <div className="App">
      <header className="App-header">
        <Grid bigBigArray={bigBigArray} />
      </header>
    </div>
  );
}

export default App;

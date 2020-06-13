import React, { useState } from 'react';
import Parent from './Parent.js';
import './App.css';

function App() {
 
 let [number, setNumber] = useState(45);
  return (
    <div>
      Hello Wolrd
          <Parent num={number} ></Parent>
          <button onClick={() => {setNumber(++number)}}>Update Number</button>
    </div>
    
  );
}

export default App;

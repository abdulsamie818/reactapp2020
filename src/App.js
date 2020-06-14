import React, { useState, useReducer } from 'react';
import Parent from './Parent.js';
import './App.css';
import ValueContext from './ValueContext'

function App() {
 
 //let [number, setNumber] = useState(45);
 let value = useState(48);
   
 return (
   <ValueContext.Provider value={value}>
    
         <div>
         Hello Wolrd
          <Parent></Parent>
         </div>
         </ValueContext.Provider>
    
   
    
  );
}

export default App;

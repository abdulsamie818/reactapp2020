import React, { useContext } from 'react';
import ValueContext from './ValueContext';


function Child() {
  let value = useContext(ValueContext)
  let updateValue = value[1];
  let incValue = value[0];
  return (
    <div>
    Child number {incValue}
    <br/>
    <button onClick = {() => {updateValue (++incValue)}}>Update Value</button>
    </div>
  );
}

export default Child;

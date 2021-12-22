import React, { useState } from 'react';
import './App.css';

function App () {
  const [string,setString]=useState('')
  
  const onChange = (e) => {
    setString(e.target.value)
  }
    return (
      <div>
        <h1>Un repetidor</h1>
        <input onChange = {onChange} type="text" placeholder="Empieza a escribir algo" />
        <p className="repeater">{string}</p>
      </div>
    );
 
}

export default App;

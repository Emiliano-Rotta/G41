import React, { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [countDos, setCountDos] = useState(0);
  const [countTres, setCountTres] = useState(0);
 
  useEffect(() => {
    console.log(`count ${count} times`)
    console.log(`countDos ${countDos} times`)
    console.log(`countTres ${countTres} times`)
  },[countDos]);

  return (
    <div>
      <p>count {count} times</p>
      
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>countDos {countDos} times</p>
      <button onClick={() => setCountDos(countDos + 1)}>
        Click me
      </button>
      <p>countTres {countTres} times</p>
      <button onClick={() => setCountTres(countTres + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App
import { useState, useEffect } from "react";

function App() {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    console.log({nombre})
  });

  return (
    <div className="App">
      <h1>useEffect</h1>
      <form >
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;

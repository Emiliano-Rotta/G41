import './App.css'

function App() {

  var colores = ["red", "blue", "black", "green"]

  return (
    <>
      <ul>
        {colores.map(col =><li key={col} style={{color:col}}>{col}</li>)}
      </ul>
      
      {/* <ul>
        {colores.map(col =><li style={{color:col}}>{col}</li>)}
      </ul> */}
      {colores.unshift("orange")}
      
      
    </>
  )
}

export default App

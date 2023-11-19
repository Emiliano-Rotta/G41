import './App.css'

function App() {

  var productos = ["Producto 1", "Producto 2", "Producto 3"]

  return (
    <>
      {/* <ul>
        <li>{productos[0]}</li>
        <li>{productos[1]}</li>
        <li>{productos[2]}</li>
      </ul> */}
      {/* <ul>
        {productos.map(p =><li >{p}</li>)}
      </ul> */}
        {/* primero ver la consola y luego agregar la key */}
        <ul>
        {productos.map(p =><li key={p}>{p}</li>)}
      </ul>
    </>
  )
}

export default App

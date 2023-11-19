import Ejemplo from "./ejemplo"

function Producto(props) {

    return (
      <div>
        <h2>Producto: {props.nombre}</h2>
        <p>Precio: {props.precio}</p>
        <p>Color: {props.color}</p>
        <Ejemplo />
      </div>
  
    )
  }
  
  export default Producto
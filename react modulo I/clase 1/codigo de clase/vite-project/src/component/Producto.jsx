function Producto(props) {

    return (
      <div>
        <h2>Producto: {props.nombre}</h2>
        <p>Precio: {props.precio}</p>
        <p>Color: {props.color}</p>
      </div>
  
    )
  }
  
  export default Producto
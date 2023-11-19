import './App.css'
import { useState } from "react"
import { productosStock } from "./Cinco"
// import CincoNoDisponible from "./CincoNoDisponible"

const Productos = () => {
    const [nombreProducto, setNombreProducto] = useState("")
    const [listaProductos, setListaProductos] = useState(productosStock)

    // Función al enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        setListaProductos([...listaProductos, { nombre: nombreProducto, stock:
        false }])
    }
    //Función al escribir sobre el input del formulario
    const capturaInput = (e) => {
        setNombreProducto(e.target.value)
    }
    return (

    <div>
        <form onSubmit={enviarFormulario}>
            <input name="nombreProducto" onChange={capturaInput} />
            <button> Agregar Tarea </button>
        </form>
        <ul>
            {listaProductos.map(tarea => 
            <li 
            key={tarea.nombre}>
            {tarea.nombre}
            {/* {!tarea.stock ? <p style={{color: "red"}}>No hay stock</p> : null} */}
            </li> )}

        </ul>
    </div>

    )
}
export default Productos
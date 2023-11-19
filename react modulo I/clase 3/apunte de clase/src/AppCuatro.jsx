import './App.css'
import { useState } from "react"

const Tareas = () => {

    const [nombreTarea, setNombreTarea] = useState("")
    const [listaTareas, setListaTareas] = useState(["Tarea 1", "Tarea 2", "Tarea 3"])


    //Función al enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        setListaTareas([...listaTareas, nombreTarea])
        setNombreTarea("")
    }


    //Función al escribir sobre el input del formulario
    const capturaInput = (e) => {
        setNombreTarea(e.target.value)
    }

    return (

        <div>
            <form onSubmit={enviarFormulario}>
                <input name="nombreTarea" onChange={capturaInput}
                value={nombreTarea} />
                <button> Agregar Tarea </button>
            </form>
            <ul>
                {listaTareas.map(tarea => <li key={tarea}> {tarea} </li> )}
            </ul>
        </div>

    )
}


export default Tareas
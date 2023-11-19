import { useState } from "react"

function MyInput() {
    const [ nombre, setNombre] = useState("")
    const [ color, setColor ] = useState("")
     console.log(nombre)
     console.log(color)
  return (
    <div>
        <h2>Hola, bienvienido {nombre}</h2>
        <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
        <input style={{backgroundColor:color}} type="text" onChange={(e) => setColor(e.target.value)} />
    </div>
  )
}

export default MyInput

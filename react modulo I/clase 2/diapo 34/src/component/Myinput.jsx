import { useState } from "react"


function Myinput() {

const [ nombre, setNombre ] = useState("")
const [ color, setColor ] = useState("") //2
console.log(nombre)
console.log(color)
    return (
      <div >
        <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
        <input style={{backgroundColor:color}} type="text" onChange={(e)=> setColor(e.target.value)}/> {/* 2 */}
      </div>
  
  
    )
  }
  
  export default Myinput
  
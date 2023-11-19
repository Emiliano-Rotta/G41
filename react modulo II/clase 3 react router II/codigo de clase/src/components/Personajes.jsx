import { useParams } from "react-router-dom"

export default function Personajes(){
    const { id } = useParams()

    // console.log("use params", useParams())
    return(
        <div>
            <h1>Hola bienvenido {id}</h1>
        </div>
    )
}
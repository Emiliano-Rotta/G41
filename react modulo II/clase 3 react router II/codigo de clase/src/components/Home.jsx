// import { useState } from "react"
// import { useNavigate } from "react-router-dom"


// export default function Home(){
//     const [id, setId] = useState("")

//     const navigate = useNavigate();
//     // console.log (navigate)

//     const irAPersonajes = () => {
//         navigate(`/personajes/${id}`)
//     }


//     return(
//         <div>
//             <h1>HOME</h1>
//             <input
//             type="text"
//             value={id}
//             onChange={({target}) => setId(target.value)}
//             />
//             <button onClick={ irAPersonajes }>IR a Personajes</button>
//         </div>
//     )
// }


const Home = () => {
    return <h1>Home</h1>
}
export default Home
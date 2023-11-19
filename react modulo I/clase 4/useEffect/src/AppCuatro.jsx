// async function getRandomUser(){
//   const res = await fetch("https://randomuser.me/api")
//   const data = await res.json()
//   console.log(data);
//  }
//  getRandomUser()

import { useState, useEffect } from "react";

function App() {
// 3. info guardará los valores traídos desde la API
const [info, setInfo] = useState([]);
// 2. LLamamos al función que consume la API al momento de montar el componente


 useEffect(() => {
 consultarInformacion();
 }, []);


// 1. Función que consulta la API
const consultarInformacion = async () => {
 const url = 'https://api.gameofthronesquotes.xyz/v1/random';
 const response = await fetch(url)
 const data = await response.json()
 setInfo(`"${data.sentence}" - ${data.character.name}`); // con setInfo actualizamos el estado
 }

return (
 <div>
 {/* { 4. Mostramos la info } */}
 { info } 
 </div>
 );
}
export default App;

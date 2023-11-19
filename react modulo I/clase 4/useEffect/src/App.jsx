// import { useState } from "react";
// import './App.css'
// const App = () => {

//   const [count, setCount] = useState(0);

//     const handleClick = (suma) => {
//       suma === "mas"? setCount (count + 1) : setCount (count - 1)
//       console.log(count) //empieza en cero
//   }
// // veamos cuantas veces se renderiza esto .. console.log("renderizado")
//     return <div>
//         <button onClick={() => handleClick("menos")}>-</button>
//         <button onClick={() => handleClick("mas")}>+</button>
//     </div>
// }

// export default App;





import { useRef } from "react";
import './App.css'
const App = () => {

  // const [count, setCount] = useState(0);
    const count = useRef(0); //ahora hay que modificar el valor.. useRef tiene una propiedad llamada (carrent) y eso modificamos 

    const handleClick = (suma) => {
      suma === "mas"? count.current ++ : count.current --;
      console.log(count.current) 
  }

  console.log("renderizado")
    return <div>
        <button onClick={() => handleClick("menos")}>-</button>
        <button onClick={() => handleClick("mas")}>+</button>
    </div>
}

export default App;





// si queremos acciones de limpieza o parar.. 


// import { useEffect, useRef, useState } from "react";
// import './App.css'
// const App = () => {

//     const timer = useRef(0); //3

//     const [count, setCount] = useState(0); //1

//     useEffect(() => { //2 para guardar la informacion del interevalo vamos a usar useRef para que permanezca en los renderizados
//       //3
//         timer.current = setInterval(() => setCount(count => count + 1), 1000) //cada segundo queremos que se aumente en 1
//     }, []);



//     return <div>
//          <p>Count: {count}</p> {/*1 */}
//     </div>
// }

// export default App;


//NOOOO!!!!si queremos pararlo

// import { useEffect, useRef, useState } from "react";
// import './App.css'
// const App = () => {

//     const timer = useRef(0);

//     const [count, setCount] = useState(0);

//     useEffect(() => { 
//         timer.current = setInterval(() => setCount(count => count + 1), 1000) 
//     }, []);


//     const handleClick = () => {
//       console.log("entre")
//       clearInterval(timer.current);      //funcion para crear un intervalo (aca es muy importante useRef porque guardamos la referencia en un lugar y podemos acceder todas las veces que querramos)
//       timer.current = 0
//   }

//     return <div>
//          <p>Count: {count}</p> {/*1 */}
//         <button onClick={handleClick}>stop</button>
  
//     </div>
// }

// export default App;
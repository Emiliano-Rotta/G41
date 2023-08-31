// ¿Qué muestra el siguiente código? 
// const arreglo1 = [1,2,3,4,5]
// arreglo1.push('hola')
// console.log(arreglo1)

// ¿Qué significa que un objeto sea mutable?

// ¿Qué muestra el siguiente código?
// const arregloUno = [1,2,3,4,5]
// let arregloDos = [].concat(arregloUno);
// arregloDos[0] = 5
// console.log(arregloUno)
// console.log(arregloDos)

// const objetoUno = { nombre: "Juan" }
// let objetoDos = Object.assign({}, objetoUno)
// objetoDos.nombre = "Maria"
// console.log(objetoUno)
// console.log(objetoDos)

// const usuario = "Juan"
// let otraUsuario = "Juan";
// console.log(usuario)
// console.log(otraUsuario)
// otraUsuario= "Maria"
// console.log(usuario);
// console.log(otraUsuario)

// ¿Cuál es la diferencia entre .forEach y .map? ¿Qué devuelve cada uno?

// [1,2,3,4].forEach(function (item){
//     console.log(item)
// })

// let numeros = [1,2,3,4].map(function (item){
//     return item*2
// })
// console.log(numeros)

const imagen = document.querySelector("img")
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")

async function getRandomUser(){
    try{
        const res = await fetch("https://randomuser.me/apii")
        const data = await res.json()
        console.log(data);
        let datos = data.results[0]
        h1.innerHTML = "Nombre: " + datos.name.first
        h2.innerHTML = "email: " + datos.email
        imagen.src = datos.picture.medium
    } catch(error) {
        alert(error)
    }

   }

getRandomUser()

// function otraForma() {
// fetch(`https://rickandmortyapi.com/api/character/`)
//   .then((res) => res.json())
//   .then((data) =>{
//     console.log(data)
//     let datos = data.results[0]
//     h1.innerHTML = "Nombre: " + datos.name.first
//     h2.innerHTML = "email: " + datos.email
//     imagen.src = datos.picture.medium
//   })
// }
// otraForma()
//Ejercicios
// const persona = { nombre: "Juan" };
// const otraPersona = Object.assign({}, persona);
// console.log(persona);
// otraPersona.nombre = "marta"

// console.log(persona);

// const usuario = ["Juan", "Emiliano"];
// const otraUsuario = [].concat(usuario);
// console.log(usuario)
// otraUsuario[0]= "Maria"
// console.log(usuario);

// var usuario = "Juan"
// var otraUsuario = usuario;
// console.log(usuario)
// otraUsuario= "Maria"
// console.log(usuario);


// [1,2,3,4].forEach(function (item){
//     console.log(item)
// })


// let numeros = [1,2,3,4].forEach(function (item){
//     console.log(item)
// })
// console.log(numeros)


// let resultado = [1,2,3,4].map(function (item){
//     return item*10});
// console.log(resultado)



//diapo 28

// async function getRandomUser(){
//     const res = await fetch("https://randomuser.me/api")
//     const data = await res.json()
//     console.log(data.results)
//     const h1 = document.querySelector("h1")
//     const h2 = document.querySelector("h2")
//     const img = document.querySelector("img")
//     h1.innerHTML = data.results[0].name.title
//     h2.innerHTML = data.results[0].email
//     img.src = data.results[0].picture.medium
//     }
// getRandomUser()
   

// async function getRandomUser(){
//     const res = await fetch("https://apisimpsons.fly.dev/api/personajes")
//     const data = await res.json()
//     console.log(data.docs)
//     const h1 = document.querySelector("h1")
//     const h2 = document.querySelector("h2")
//     const img = document.querySelector("img")
//     h1.innerHTML = `Nombre: ${data.docs[0].Nombre}`
//     h2.innerHTML = `Historia: ${data.docs[0].Historia}`
//     img.src = data.docs[0].Imagen
//     }
// getRandomUser()


// // otra forma de hacer el fetch
// function getRandomUser(){
//     fetch("https://randomuser.me/api")
//     .then((res) => res.json())
//     .then((data) =>{
//     console.log(data.results)
//     const h1 = document.querySelector("h1")
//     const h2 = document.querySelector("h2")
//     const img = document.querySelector("img")
//     h1.innerHTML = data.results[0].name.title
//     h2.innerHTML = data.results[0].email
//     img.src = data.results[0].picture.medium
//     })
// }
// getRandomUser()



// fetch(`https://rickandmortyapi.com/api/character/`)
//   .then((res) => res.json())
//   .then((data) =>{
//     console.log(data.results)

//     let elementos = document.getElementById('tarjetas')
//     let html = ""
//     for (let i = 0; i < 20; i++) {
//       html = html +
//       `
//       <div class='card'>
//       <h2>${data.results[i].name}</h2>
//       <img src=${data.results[i].image} alt="">
//       <p>Estado: ${data.results[i].status}</p>
//       <p>Especie: ${data.results[i].species}</p>
//       <p>Genero: ${data.results[i].gender}</p>
//       </div>
//       `
//     }
//     elementos.innerHTML = html

// })


//pasamos directo a la 31
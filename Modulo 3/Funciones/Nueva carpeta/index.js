// function saludar(nombre = "Emiliano", apellido = "Rotta", edad = 30, pais = "Argentina"){
//     // alert("hola " + nombre)
//     console.log("nombre", nombre)
//     console.log("apellido", apellido)
//     console.log("edad",edad)
//     console.log("pais", pais)
// }


// saludar("Ricardo", "chile")






// let usuario = prompt("Escriba su nombre")
// saludar(usuario)
// saludar("Maria")
// saludar("Carla")
// saludar("Felipe")
// saludar("Rodrigo")
// saludar("Ricardo")
// saludar("Ricardo")
// saludar("Ricardo")

// console.log("Hola Ricardo, como esta?")
// console.log("Hola Maria, como esta?")
// console.log("Hola Carla, como esta?")
// console.log("Hola Felipe, como esta?")
// console.log("Hola Rodrigo, como esta?")
// console.log("Hola Ricardo, como esta?")
// console.log("Hola Ricardo, como esta?")
// console.log("Hola Ricardo, como esta?")


// let elemento = document.querySelector("body")


// function pintar(colorUno, colorDos){
//     elemento.style.color = colorUno
//     elemento.style.backgroundColor = colorDos
// }

// pintar("white", "red")

// function suma(a = 0, b = 0, c = 3){
//     console.log(c)
// }

// suma(2, 4)

// let elemento = document.querySelector("body")

// function pintar(color){
//     if(elemento.style.backgroundColor === "white") {
//         elemento.style.backgroundColor = color
//     }
//     else {
//         elemento.style.backgroundColor = "white"
//     }
   
// }


function agregarBordes(elementoId){
    var elemento = document.querySelector(elementoId)
    elemento.style.border = "dashed 3px brown"
}


// Presente de clase
const programadores = [
    {
        id: 1,
        nombre: "Ana",
        apellido: "Rojas",
        lenguajes: ["TS", "JS"],
        presente: false
    },
    {
        id: 2,
        nombre: "Eduardo",
        apellido: "Martinez",
        lenguajes: ["Node", "JS"],
        presente: true
    },
    {
        id: 3,
        nombre: "Sol",
        apellido: "Martinoli",
        lenguajes: ["Angular", "JS"],
        presente: true
    },
    {
        id: 4,
        nombre: "Emiliano",
        apellido: "Poincaré",
        lenguajes: ["TS", "JS"],
        presente: true
    }
]

// Método Find:  nos devuelve todo lo que le pedimos
// let find = programadores.find(alumnos => alumnos.presente === true)
// console.log(find)

// Método Some: este método nos devuelve true o false dependiendo si existe o no lo que estamos buscando
// let some = programadores.some(alumnos => alumnos.nombre.includes("Sol"))
// console.log(some)

//Método Include: hay algun lenguajes donde en tas incluya tal cosa
// let someInclude = programadores.some(c => c.lenguajes.includes("React"))
// console.log(someInclude)

//Método every: no solo comprueba si hay uno sino si se da en todos
// let every = programadores.every(c => c.presente === true)
// console.log(every)

//Metodo filter: filtrar nos devuelve un array nuevo con los objetos 
// let filter = programadores.filter(c => c.lenguajes.includes("TS"))
// console.log(filter)

//Método map: map es como un bucle for pero mas declarativa.. (le digo que quiero hacer)
// let map = programadores.map(alumna => alumna.nombre)
// console.log(map)

//Método Reduce:reduce para reducir recibe el acumulador y luego el elemento que va iterando y devuelve un nuevo array y luego lo inicializamos con un array vacio para que entienda que el acumulador es un objeto. 

// let reduce = programadores.reduce((acumulador, iterador) =>{
//     return [...acumulador, iterador.nombre]
// },[])

// console.log(reduce)











// Método Reduce sin repetir:

// let reduceSinRepetir = programadores.reduce((acumulador, iterador) =>{
//     return Array.from(new Set([...acumulador, ...iterador.lenguajes]))
// },[])

// console.log(reduceSinRepetir)



// Ejercicios: Crear un Array que tenga 5 objetos: dentro de cada objeto: 1 booleano, 1 array, 2 que sea string, 1 numero minimo
// Find, Some, Include, every, filter..
// 1) Obtener todos los datos que tengan el boleano true (filter)
// 2) Devolver true si todos los booleanos son true (every)
// 3) Que devuelva true si esta el string que buscan (some)
// 4) traer toda la informacion del id 3 (find)



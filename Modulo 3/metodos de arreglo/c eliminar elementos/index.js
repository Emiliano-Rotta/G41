// En JavaScript podemos eliminar elementos de un arreglo utilizando splice. 

//arreglo.splice(<índice>, <cantidad de elementos a eliminar>)


const cocteles = [ "Piñacolada", "Margarita", "Mojito", "Caipirinha" ]
cocteles.splice(2, 1) /* Eliminamos el elemento en el índice 2, o sea
Mojito */
console.log(cocteles)


// El método findIndex
// En algunos casos vamos a necesitar borrar un elemento a partir de su valor, por ejemplo
// queremos borrar "Margarita" del arreglo anterior, en ese caso tendremos que buscar el
// índice primero con findIndex y luego borrar el elemento ocupando splice


// const cocteles = [ "Piñacolada", "Margarita", "Mojito", "Caipirinha" ]
// const index = cocteles.findIndex( (elemento) => elemento === "Piñacolada" )
// console.log("index", index)
// cocteles.splice(index, 1)
// console.log("cocteles",cocteles)


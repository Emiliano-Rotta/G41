//antes de dar este tema ir a las diapos 32

let listaDeInvitados = document.querySelector("#invitados")
let invitadoInput = document.querySelector("#nuevoInvitado")
let btnAgregar = document.querySelector("#agregarInvitado")
const invitados = [
    { id: 431, nombre: "Jhonny Depp" },
    { id: 124, nombre: "Brad Pitt" },
    { id: 541, nombre: "Leonardo DiCaprio" },
    { id: 664, nombre: "Morgan Freeman" }
   ];



   //11111111111111111111111111

//    btnAgregar.addEventListener("click", () => {
//         /* Agregamos el invitado al arreglo */
//         nuevoInvitado = {id: Date.now(), nombre: invitadoInput.value} 
//         invitados.push(nuevoInvitado)
//         invitadoInput.value = ""
//         /* Actualizamos la información en el HTML */
//         let html = ""
//         for (invitado of invitados) {
//         html += `<li>${invitado.nombre}</li>`
//         }
//         listaDeInvitados.innerHTML = html;
//     })




//222222222222222222222222222

//hacerla luego del boton
// function borrar(id){
//     const index = invitados.findIndex((ele) => ele.id == id)
//     invitados.splice(index, 1)
// }

    
// btnAgregar.addEventListener("click", () => {
//     /* Agregamos el invitado al arreglo */
//     nuevoInvitado = {id: Date.now(), nombre: invitadoInput.value} 
//     invitados.push(nuevoInvitado)
//     invitadoInput.value = ""
//     /* Actualizamos la información en el HTML */
//     let html = ""
//     for (invitado of invitados) {
//     html += `
//     <li>
//         ${invitado.nombre}
//         <button onclick="borrar(${invitado.id})"> x </button> 
//     </li>
//     `;
//  }
//  listaDeInvitados.innerHTML = html;
//  })



// 33333333333333333333333

function borrar(id){
    const index = invitados.findIndex((ele) => ele.id == id)
    invitados.splice(index, 1)
    renderInvitados()
}
function renderInvitados(){
    let html = ""
    for (invitado of invitados) {
        html += `
        <li>
            ${invitado.nombre}
            <button onclick="borrar(${invitado.id})"> x </button> 
        </li>`;
    }
    listaDeInvitados.innerHTML = html;
}
    
btnAgregar.addEventListener("click", () => {
    /* Agregamos el invitado al arreglo */
    nuevoInvitado = {id: Date.now(), nombre: invitadoInput.value} 
    invitados.push(nuevoInvitado)
    invitadoInput.value = ""
    renderInvitados()
    /* Actualizamos la información en el HTML */

 })
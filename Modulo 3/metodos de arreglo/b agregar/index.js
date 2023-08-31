let listaDeInvitados = document.querySelector("#invitados")
let invitadoInput = document.querySelector("#nuevoInvitado")
let btnAgregar = document.querySelector("#agregarInvitado")

let invitados = []

btnAgregar.addEventListener("click", () => {
   /* Agregamos el invitado al arreglo */
   const nombreInvitado = invitadoInput.value
   invitados.push(nombreInvitado)
   invitadoInput.value = ""
   /* Actualizamos la información en el HTML */
   let html = ""
   for (let invitado of invitados) {
   html += `<li>${invitado}</li>`;
   }
   listaDeInvitados.innerHTML = html;
})



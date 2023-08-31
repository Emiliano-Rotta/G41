const inputNombre = document.getElementById("input-nombre")
const inputContrasenia = document.getElementById("contrasenia")
const inputContraseniaConfirmacion = document.getElementById("contrasenia-confirmacion")
const error = document.getElementById("error")
const imagen = document.querySelector("img")


const mostrarElementoEnFoco = () => {
  console.log("el elemento esta en foco")
}

const mostrarElementoEnBlur = () => {
  console.log("el elemento ya no esta mas en foco")
}

inputNombre.onfocus = mostrarElementoEnFoco

inputNombre.onblur = mostrarElementoEnBlur
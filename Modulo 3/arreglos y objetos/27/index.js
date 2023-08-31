const escalaMayorDeDo = ['Do', ' Re', 'Mi', 'Fa', 'Sola', 'La', 'Si']
const d = document.querySelector('#dynamic-content')

for (let item of escalaMayorDeDo) {
    d.innerHTML += `<li>${item}</li>`
}
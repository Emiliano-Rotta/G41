const data = ['Javiera', ' Camila', 'Francisco', 'Jorge', 'Daniela']
const d = document.querySelector('#dynamic-content')

for (let item of data) {
    d.innerHTML += `<li>${item}</li>`
}
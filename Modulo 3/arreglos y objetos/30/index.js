let data = ['Javiera', ' Camila', 'Francisco', 'Jorge', 'Daniela']
let html = ""
const d = document.querySelector('#dynamic-content')

for (let item of data) {
   html += `<li>${item}</li>`
}
d.innerHTML = html
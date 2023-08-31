const elemento = document.querySelector(".productos")

const productos = [
   {
      id: 1,
      nombre: "Item 1",
      precio: "12000",
   },
   {
      id: 2,
      nombre: "Item 2",
      precio: "14000",
   }
]

let html = ""

for (let item of productos) {
   html +=
   `
   <div id=${item.id}>
     <h2>${item.id}</h2>
      <h2>${item.nombre}</h2>
      <p>${item.precio}</p>
   </div>
   `
}

elemento.innerHTML = html
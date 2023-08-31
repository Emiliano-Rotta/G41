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
for (let producto of productos) {
   html += 
   `
   <div id=${producto.id}>
      <h2>${producto.nombre}</h2>
      <p>${producto.precio}</p>
   </div>
   `
}

const ele = document.querySelector(".productos")

ele.innerHTML =html


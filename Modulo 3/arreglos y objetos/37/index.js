const articulo = {
   id: 31,
   titulo: "Autos nuevos en Chile",
   subtitulo: "El mercado de autos se normaliza",
   descripcion:"no es novedad que los precios de los autos usadosse han disparado.........."
};
const articulosSection = document.querySelector(".articulos")

articulosSection. innerHTML = 
`
   <article>
      <h4>${articulo.titulo}</h4>
      <h6>${articulo.subtitulo}</h6>
      <p>${articulo.descripcion}</p>
      <a href="/articulo/${articulo.id}">
      <button>Ver más</button>
      </a>
   </article>
`;


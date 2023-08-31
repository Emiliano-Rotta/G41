import MuestraDePeliculas from "./MuestadePeliculas";

function UltimosLanzamientos() {
    return (
  
      <div >

        
        <MuestraDePeliculas 
            titulo="Ultimos Lanzamientos"
            peliculas={["Ultimos Lanzamientos 1, Ultimos Lanzamientos 2, Ultimos Lanzamientos 3"]}
        />
  
      </div>
  
    );
  }
  
  export default UltimosLanzamientos;
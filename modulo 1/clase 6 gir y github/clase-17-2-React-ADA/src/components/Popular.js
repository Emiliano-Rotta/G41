import MuestraDePeliculas from "./MuestadePeliculas";

function Popular() {
    return (
  
      <div >

        <MuestraDePeliculas 
            titulo="popular"
            peliculas={["Popular 1, Popular 2, Popular 3"]}
        />
      </div>
  
    );
  }
  
  export default Popular;
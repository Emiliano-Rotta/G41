function MuestraDePeliculas({titulo, peliculas}) {
    return (

        <>
            <h2>{titulo}</h2>
            {peliculas.map(pelicula => <p>{pelicula}</p>)}


        </>

  
    );
  }
  
  export default MuestraDePeliculas;
import s from "./Peliculas.module.css"

function Peliculas({titulo, imagen, link}) {

    return (
  
      <div className={s.Pelicula}>
        <img src={imagen} className={s.PeliculasImg} alt="no econtrado" />
        <p>{titulo}</p>
        <a href={link}>{">"}</a>
  
      </div>
  
    );
  }
  
  export default Peliculas;
  
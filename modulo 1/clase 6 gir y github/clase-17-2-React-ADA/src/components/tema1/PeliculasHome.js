import { useState, useEffect } from "react"
import s from "./Peliculas.module.css"
import Peliculas from "./Peliculas"

const PeliculasHome = ({ titulo, url }) => {
    
    const [peliculas, setPeliculas] = useState([])

    useEffect (()=>{
        fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`)
        .then(res => res.json())
        .then(data => setPeliculas(data.results))
    }, [])


    return (
        <div className={s.Lista}> 
            <h2>{titulo}</h2> 
            {peliculas?.map(pelicula => (
            <Peliculas 
                titulo={pelicula.title}
                imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} 
            />
            ))}
        </div>
    )
}

export default PeliculasHome
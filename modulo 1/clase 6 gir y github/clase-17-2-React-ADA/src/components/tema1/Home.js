import PeliculasHome from "./PeliculasHome"
import s from "./Peliculas.module.css"

const Home = () => {
    return (
        <div className={s.Home}> 
            <PeliculasHome titulo="Peliculas Populares" url="popular" />
            <PeliculasHome titulo="Peliculas Mejor puntuadas" url="top_rated" />
        </div>
    )
}

export default Home
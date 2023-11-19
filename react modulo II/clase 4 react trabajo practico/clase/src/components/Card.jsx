import { Link } from "react-router-dom"
import { useContext } from "react"
import { PizzaContext } from "../context/PizzaProvider"

function Card() {

    const {pizzas, setPizzas } = useContext(PizzaContext)

    return (
      <>
      {pizzas.map((pizza) => (
        <div>
            <img src={pizza.img} alt="" />
            <h4>Pizza {pizza.name}</h4>
            {/* <h6>Ingredientes</h6>
            <ul>
                <li>todos los Ingredientes</li>
            </ul>
            <h4>Precio</h4> */}
            <Link to={`pizza/${pizza.id}`}>Ver mas</Link>
            <Link to="/carrito">Añadir</Link>
        </div>

        ))}

      </>
    )
  }
  
  export default Card
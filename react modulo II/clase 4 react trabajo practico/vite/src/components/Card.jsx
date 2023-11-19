import { useContext } from "react";
import { PizzasContext } from "../context/PizzaProvider";

    function Card() {
      const { pizzas, addToCart } = useContext(PizzasContext);
    
      return (
        <>
        {pizzas.map((pizza) => (
            // <div key={pizza.id} >
                  <img src={pizza.img} alt="" />
                  /* <h4>Ingredientes:</h4>
                  <ul>
                    <li>
                        listado mediante un map
                    </li>
                  </ul>
                  <h2>Precio</h2>
                  <button>
                    ver mas
                  </button>
                  <button>
                    añadir al carrito
                  </button> */
            ))}
        </>
      )
    }
    
    export default Card
    
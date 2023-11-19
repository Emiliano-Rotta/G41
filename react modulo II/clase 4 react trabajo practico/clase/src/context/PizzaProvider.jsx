import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {

    useEffect(() =>{
        getPizzas();
    },[]);
    
    const[pizzas,setPizzas] = useState([])

    const getPizzas = async () => {
        const res = await fetch("/pizzas.json")
        const pizzas = await res.json();
        setPizzas(pizzas)
    }

  

    return (
        <PizzaContext.Provider value={{ pizzas }}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider
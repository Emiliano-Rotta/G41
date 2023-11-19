import { createContext, useState, useEffect } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
    useEffect(() => {
        getPizzas();
      }, []);
    const [pizzas, setPizzas] = useState([]);
    const getPizzas = async () => {
        const res = await fetch("/pizzas.json");
        const pizzas = await res.json();
        setPizzas(pizzas);
      };

    return (
        <PizzasContext.Provider
          value={{ pizzas}}
        >
          {children}
        </PizzasContext.Provider>
      );
    };
    
    export default PizzasProvider;
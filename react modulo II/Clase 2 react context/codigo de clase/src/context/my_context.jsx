import { createContext, useState } from "react";

export const MyContext = createContext({})

const CounterProvider = ({children}) => {
    const [data, setData] = useState(0)
    return (
        <MyContext.Provider value={{data, setData}} >
            {children}
        </MyContext.Provider>
    )
}


export default CounterProvider
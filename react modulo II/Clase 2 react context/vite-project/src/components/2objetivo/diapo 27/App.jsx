import Decrement from "./components/2objetivo/diapo 27/components/Decrement";
import Increment from "./components/2objetivo/diapo 27/components/Increment";
import MyContext from "./components/2objetivo/diapo 27/context/my_context";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(0)
  const sharedState = {data, setData}
  
  return (
    <div>
      <MyContext.Provider value={sharedState}>
        {/* Todos los componentes que estén anidados podran acceder al context */}
        <Increment />
        <Decrement />
      </MyContext.Provider>
    </div>
  );
};
export default App;
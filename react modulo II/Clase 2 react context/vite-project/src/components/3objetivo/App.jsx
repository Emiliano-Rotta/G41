import Decrement from "./components/2objetivo/diapo 36/components/Decrement";
import Increment from "./components/2objetivo/diapo 36/components/Increment";
import CounterProvider from "./components/2objetivo/diapo 36/context/my_context";

const App = () => {
  
  return (
    <div>
      <CounterProvider>
        {/* Todos los componentes que estén anidados podran acceder al context */}
        <Increment />
        <Decrement />
      </CounterProvider>
    </div>
  );
};
export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Decrement from "./components/3objetivo/components/Decrement";
import Increment from "./components/3objetivo/components/Increment";
import CounterProvider from "./components/3objetivo/context/my_context";
import Navbar from "./components/3objetivo/components/Navbar";

const App = () => {
  
  return (
    <div>
      <CounterProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/dec" element={<Decrement />}/>
            <Route path="/inc" element={<Increment />}/>        
          </Routes>
        </BrowserRouter>
      </CounterProvider>
    </div>
  );
};
export default App;
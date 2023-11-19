import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Carrito from "./pages/Carrito"
import Detalle from "./pages/Detalle"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pizzas/:id" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

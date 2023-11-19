// import './App.css'

import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Detalle from "./pages/Detalle"
import Carrito from "./pages/Carrito"
import NotFound from "./pages/NotFound"

function App() {


  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/carrito" element={<Carrito />}/>
          <Route path="/pizza/:id" element={<Detalle />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </>
  )
}

export default App

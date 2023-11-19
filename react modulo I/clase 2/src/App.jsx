import './App.css'
import Producto from './component/Producto'
import Ejemplo from './component/ejemplo'


function App() {


  return (
    <div>
      <Producto nombre="Computadora" precio="400USD" color="gris"/>
      <Producto nombre="celular" precio="50USD" color="negro"/>
      <Producto nombre="vaso de agua" precio="5USD" color="transparente"/>
    <Ejemplo />

    </div>


  )
}

export default App

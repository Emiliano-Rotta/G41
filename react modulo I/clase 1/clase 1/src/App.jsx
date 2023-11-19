// import Titulo from './component/Titulo'
import './App.css'
// import Banner from './component/Banner'
import Sidebar from './component/Sidebar'

function App() {


  return (
    <div className='hola'>
      <Sidebar nombre="Telefono" precio="$25.364"/>
      <Sidebar nombre="Telefono"/>
      {/* <Titulo />
      <Titulo /> */}
    </div>
  )
}

export default App

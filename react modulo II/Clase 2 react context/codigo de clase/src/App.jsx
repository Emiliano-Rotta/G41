import { BrowserRouter, Route, Routes } from "react-router-dom"
import Decrement from "./components/Decrement"
import Increment from "./components/increment"
import CounterProvider from "./context/my_context"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <CounterProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/dec" element= {<Decrement />} />
            <Route path="/inc" element=  {<Increment />} />
          </Routes>    
        </BrowserRouter>
      </CounterProvider>


    </>
  )
}

export default App

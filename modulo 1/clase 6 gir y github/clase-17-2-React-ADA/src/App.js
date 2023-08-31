import { useState } from "react";

function App() {

  const[numeroPag, setNumeroPag] = useState(1)
  return (

    <div >
      <button onClick={()=> setNumeroPag((numeroPag >= 2) && numeroPag-1)}>{"<"}</button>

      {numeroPag}

      <button onClick={()=> setNumeroPag(numeroPag+1)}>{">"}</button>


    </div>

  );
}

export default App;





















// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from "./components/Home";
// import Search from "./components/Search";
// import Cuatrocientos from "./components/Cuatrocientos"
// import SearchRedireccionado from "./components/SearchRedireccionado"

// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//     <div className="App-header">
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/search" element={<Search />}/>
//         <Route path="*" element={<Cuatrocientos />}/>
//         <Route path="/redireccion/:name" element={<SearchRedireccionado />}/>
//       </Routes>
      

//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Detalle from "./views/Detalle";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";

const App = () => {
  return (
    <div className="App">
      <Menu />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pokemones"
          element={<Pokemones />}
        />
        <Route
          path="/pokemones/:name"
          element={<Detalle />}
        />
      </Routes>
    </div>
  );
};
export default App;

import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import PlansPage from "./views/PlansPage";

// El componente Routes (Ruts) funciona como un envoltorio de rutas.
// El componente Route (Rut) define una ruta dentro de nuestro enrutador y tiene la siguiente estructura:
// En donde el atributo path define la ruta y el atributo element el componente que se mostrará cuando
// coincida el path con la URL del navegador.
// Aunque se escriben varios componentes Route, solo se renderiza 1.


const App = () => {
 return (
 <div>
 <Navigation />
 <Routes>
 <Route
 path="/"
 element={<HomePage />}
 />
 <Route
 path="/planes"
 element={<PlansPage />}
 />
 {/* 
 ● La ruta por defecto nos ayudará a poder
personalizar y devolver una vista en caso
de que el usuario consulte nuestra página
web con una URL que no coincida con
ninguna de nuestras rutas.
● Para agregar la ruta por defecto, incluye la
vista NotFound para que sea utilizado por
un Route nuevo que tenga como path un
asterisco: *
 
 
 <Route
 path="*"
 element={<NotFound />}
 /> */}


 </Routes>
 </div>
 );
};
export default App;

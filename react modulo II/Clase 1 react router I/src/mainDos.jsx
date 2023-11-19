import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

//BrowserRouter es el componente encargado de mantener actualizado el UI en función de la URL, este debe envolver a toda la aplicación. 
//Todos los componentes se agregan dentro de BrowserRouter.

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
 </React.StrictMode>
);

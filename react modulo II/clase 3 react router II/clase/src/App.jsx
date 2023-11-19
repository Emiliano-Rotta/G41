import { Routes, Route, Navigate } from "react-router-dom";
import Administracion from "./components/Administracion";
import Home from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import { UserContext } from "./context/userContext";
import { useContext } from "react";


const App = () => {
    const { user } = useContext(UserContext);
    return (
    <div>
    <Navigation />
    <Routes>  
        <Route path="/"  element={<Home />}  />
        <Route path="/admin" element={user ? <Administracion /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </div>
    );
   };
   export default App;
   
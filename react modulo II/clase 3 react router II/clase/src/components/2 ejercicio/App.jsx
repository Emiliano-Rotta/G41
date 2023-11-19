import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Personajes from "./components/Personajes";


export default function App() {
return (
    <div className="App">
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personajes/:id" element={<Personajes />} />
            </Routes>

        </BrowserRouter>
    </div>
 );
}
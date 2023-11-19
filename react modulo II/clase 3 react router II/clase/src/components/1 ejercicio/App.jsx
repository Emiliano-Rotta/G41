import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";


export default function App() {
return (
    <div className="App">
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    </div>
 );
}
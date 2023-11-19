import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


// ● Ahora, abramos el componente
// Navigation para agregar 2 Links: Home
// y Planes
// ● El componente Link funciona similar a
// la etiqueta de hipervínculo(a) de HTML.
// ● Una diferencia importante radica en que
// este componente produce el
// redireccionamiento con React Router y
// evita la recarga del navegador.

// Con este redireccionamiento evitamos tener que volver a consumir todos los recursos de nuestra
// aplicación al evitar que se recargue el navegador.
// React Router se encargará de actualizar parcialmente el DOM en función a la ruta que consultemos.



const Navigation = () => {
 return (
    <Navbar bg="dark" variant="dark" >
        <Container className="justify-content-start">
            <Navbar.Brand>Dogstel</Navbar.Brand>
            <Link to="/" className="text-white ms-3 text-decoration-none" >
                Home
            </Link>
            <Link
            to="/planes"
            className="text-white ms-3 text-decoration-none"
            >
                Planes
            </Link>
        </Container>
    </Navbar>
 );
};
export default Navigation;
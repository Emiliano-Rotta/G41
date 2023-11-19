import { Container, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
    >
      <Container className="justify-content-start">
        <Navbar.Brand>Dogstel</Navbar.Brand>
        {/* Links */}
      </Container>
    </Navbar>
  );
};
export default Navigation;

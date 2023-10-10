import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>

      <Navbar bg="danger">

        <Container>
         
         <Nav className="me-auto">

            <Nav.Link >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home 🏠
          </Link>
            </Nav.Link>


            <Nav.Link>
              <Link to="/contacto" style={{ textDecoration: "none", color: "white" }}>
              Contacto 📒
              </Link>
               </Nav.Link>

          </Nav>

          <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Happy Cake 🍰
          </Link>
            </Navbar.Brand>
          
        </Container>

      </Navbar>

    </>
  );
}

export default NavBar;
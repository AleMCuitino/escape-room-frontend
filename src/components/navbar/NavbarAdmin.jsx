import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavAdmin } from "@/components/navbar/navbarAdminStyled.js";

function NavbarAdmin() {
    return (
        <NavAdmin>
            <Navbar className="nav-admin">
                <Container className="nav-admin">
                    <div className="nav-admin d-flex flex-column justify-content-start">
                        <p>Bienvenido</p>
                        <Navbar.Brand className="user-admin" href="#home">Lorem Ipsum</Navbar.Brand>
                    </div>
                    <Navbar.Collapse className="d-flex justify-content-end" id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#deets">Icon 1</Nav.Link>
                            <Nav.Link href="#deets">Icon 2</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">Icon 3</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </NavAdmin>
    );
}

export default NavbarAdmin;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavAdmin } from "@/components/navbar/navbarAdminStyled.js";
import Logout from "../../assets/icons/logout.svg";
import Prision from "../../assets/icons/prision.svg";
import User from "../../assets/icons/user.svg";

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
                            <Nav.Link  href="#deets"><img src={Logout}></img></Nav.Link>
                            <Nav.Link href="#deets"><img src={Prision}></img></Nav.Link>
                            <Nav.Link href="#memes"><img src={User}></img></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </NavAdmin>
    );
}

export default NavbarAdmin;
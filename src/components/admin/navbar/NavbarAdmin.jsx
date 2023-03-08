import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavAdmin } from "./navbarAdminStyled";
import Logout from "../../../assets/icons/logout.svg";
import Prision from "../../../assets/icons/prision.svg";
import User from "../../../assets/icons/user.svg";
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

function NavbarAdmin() {
    
    const { userStorage, setUserStorage } = useContext(UserContext);

    return (
        <NavAdmin>
            <Navbar className="nav-admin">
                <Container className="nav-admin">
                    <div className="nav-admin d-flex flex-column justify-content-start">
                        <p className='align-bottom mb-0'>Bienvenido</p>
                        <Navbar.Brand className="user-admin">{userStorage?.user?.name}</Navbar.Brand>
                    </div>
                    <Navbar.Collapse className="d-flex justify-content-end" id="responsive-navbar-nav">
                        <Nav className='gap-3'>
                            <Link to='/login'><img src={Logout}></img></Link>
                            <Link to='/mi-admin'><img src={Prision}></img></Link>
                            <Link to='/crear-usuario-admin'><img src={User}></img></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </NavAdmin>
    );
}

export default NavbarAdmin;
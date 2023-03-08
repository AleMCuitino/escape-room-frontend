import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Logout from "../../../assets/icons/logout.svg";
import Prision from "../../../assets/icons/prision.svg";
import User from "../../../assets/icons/user.svg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavbarAdmin from "../../src/components/admin/navbar/NavbarAdmin";

describe('Show navbar welcome', () => {
    it('renders text correctly', () => {
        try {
            const sut = render(
                <Router>
                    <NavbarAdmin />
                </Router>
            );
        } catch (e) {
            console.error(e);
        }
    });

    describe('Nav component renders correctly', () => {
        const component = render(
            <Router>
                <Nav className='gap-3'>
                    <Link to='/login'><img src='Logout'></img></Link>
                    <Link to='/mi-admin'><img src='Prision'></img></Link>
                    <Link to='/crear-usuario-admin'><img src='User'></img></Link>
                </Nav>
            </Router>
        );
        expect(component).toMatchSnapshot();
    });

    test('renders link with correct to prop and img element', () => {
        const { getByRole } = render(
            <MemoryRouter>
                <Link to="/login">
                    <img src={Logout} alt="Logout" />
                </Link>
            </MemoryRouter>
        );

        const linkElement = getByRole('link', { name: /logout/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/login');
        expect(linkElement.querySelector('img')).toBeInTheDocument();
    });

    test('renders link with correct to prop and img element', () => {
        const { getByRole } = render(
            <MemoryRouter>
                <Link to="/mi-admin">
                    <img src={Prision} alt="Prision" />
                </Link>
            </MemoryRouter>
        );

        const linkElement = getByRole('link', { name: /prision/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/mi-admin');
        expect(linkElement.querySelector('img')).toBeInTheDocument();
    });

    test('renders link with correct to prop and img element', () => {
        const { getByRole } = render(
            <MemoryRouter>
                <Link to="/crear-usuario-admin">
                    <img src={User} alt="User" />
                </Link>
            </MemoryRouter>
        );

        const linkElement = getByRole('link', { name: /user/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/crear-usuario-admin');
        expect(linkElement.querySelector('img')).toBeInTheDocument();
    });
});
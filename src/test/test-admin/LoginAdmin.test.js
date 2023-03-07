import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from '@testing-library/jest-dom'
// import Footer from "../../pages/admin/login-admin/LoginAdmin";
import FooterAdmin from "../../components/admin/footer/FooterAdmin";

/**
 * @jest-environment jsdom
 */

describe('LoginAdmin component', () => {

    test('footer login admin exists', () => {
        render(<FooterAdmin />); 
        const link = screen.getByRole('link', { name: 'link'})
        expect(link).toBeInTheDocument();
    });

});
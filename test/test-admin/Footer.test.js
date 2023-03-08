import FooterAdmin from '../../src/components/admin/footer/FooterAdmin'
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from "@testing-library/react";
import { FooterIcon } from '../../src/components/admin/footer/footerAdminStyled';
import { Link } from 'react-router-dom';
import IconGit from '@/assets/icons/github.svg';

describe("Show message from Develop Team", () => {
    it("Should render paragraph from Develop Team!", () => {
        const sut = render(
            <Router>
                <FooterAdmin />
            </Router>
        );
        const paragraphElement = sut.getByText("Code with {❤️} by Grupo#2 P5-850H");
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders link with correct to prop and img element', () => {
        const { getByRole } = render(
            <MemoryRouter>
                <FooterIcon className='icon-git d-flex flex-column align-items-center' as={Link} to="https://github.com/fcegatti/escape-room-backend">
                    <img className='img-fluid d-flex' title="github" src={IconGit} />
                    <p className='mb-0'>Back-end</p>
                </FooterIcon>
            </MemoryRouter>
        );

        const linkElement = getByRole('link', { name: 'Back-end' });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.getAttribute('href')).toBe('https://github.com/fcegatti/escape-room-backend');
        expect(linkElement.querySelector('img')).toBeInTheDocument();
    });

});
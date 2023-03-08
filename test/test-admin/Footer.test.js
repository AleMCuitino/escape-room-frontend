import FooterAdmin from '../../src/components/admin/footer/FooterAdmin'
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from "@testing-library/react";

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
});
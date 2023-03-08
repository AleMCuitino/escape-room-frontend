import Start from "../../src/pages/escape-room/start/Start";
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe("Show start! game escpae-room", () => {
    it("Should render title'Comenzamos!'", () => {
        const sut = render(
            <Router>
                <Start />
            </Router>
        );
        const titleElement = sut.getByText("Comenzamos!");
        expect(titleElement).toBeInTheDocument();

        const paragraphElement = sut.getByText("Hagan click en el botón correcto para corregir el eror 404");
        expect(paragraphElement).toBeInTheDocument();
    });
});
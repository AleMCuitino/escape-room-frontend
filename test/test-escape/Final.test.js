import Final from "../../src/pages/escape-room/final-escape/Final";
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from "@testing-library/react";

describe("Show congratulations", () => {
    it("Should render title Felicitaciones!", () => {
        const sut = render(
            <Router>
                <Final />
            </Router>
        );
        const titleElement = sut.getByTitle("congrats");
        expect(titleElement).toBeInTheDocument();
    });
});
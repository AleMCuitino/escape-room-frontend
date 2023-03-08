import FooterAdmin from "../../src/components/admin/footer/FooterAdmin";
import { render, fireEvent } from "@testing-library/react";

describe("Show footer", () => {
    it("Should render paragraph Code with {❤️} by Grupo#2 P5-850H navbar", () => {
        const sut = render (<FooterAdmin/>);
        const paragraphElement = sut.getByText("Code with {❤️} by Grupo#2 P5-850H");
            expect(paragraphElement).toBeInTheDocument();
    });
});
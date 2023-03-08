import NavbarAdmin from "./src/components/admin/navbar/NavbarAdmin";
import { render, fireEvent } from "@testing-library/react";

describe("Show navbar", () => {
    it("Should render title Bienvenido navbar", () => {
        const sut = render (<NavbarAdmin/>);
        const titleElement = sut.getByText("Bienvenido");

        expect(titleElement).toBeInTheDocument();
    });
});
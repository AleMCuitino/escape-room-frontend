import TableAdmin from "../../src/components/admin/dashboard/table-admin/TableAdmin";
import { render, fireEvent } from "@testing-library/react";
import { Table } from "react-bootstrap-icons";

describe("Show alert", () => {
    it("Should render title `¿Estás seguro?` in alert", () => {
        const sut = render (<TableAdmin/>);
        const paragraphElement = sut.getByText("¿Estás seguro?");
            expect(paragraphElement).toBeInTheDocument();
    });
});
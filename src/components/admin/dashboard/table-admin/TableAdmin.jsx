import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function TableAdmin() {
    return (
        <Container>
            <Table striped>
                <thead>
                    <tr>
                        <th>Edición Escape-room</th>
                        <th>Acción</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default TableAdmin;
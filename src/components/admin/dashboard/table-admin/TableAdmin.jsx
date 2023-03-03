import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

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
                        <td>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>Jornada selección P33</p>
                                </div>
                                <div className='buttons'>
                                    <Button variant="light">Editar</Button>{' '}
                                    <Button variant="warning">Eliminar</Button>{' '}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='button-active'>
                                <Button variant="light">Activar</Button>{' '}
                            </div>
                        </td>
                        <td>activo</td>
                    </tr>
                    <tr>
                        <td>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>Escape selección P3</p>
                                </div>
                                <div className='buttons'>
                                    <Button variant="light">Editar</Button>{' '}
                                    <Button variant="warning">Eliminar</Button>{' '}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='button-active'>
                                <Button variant="light">Activar</Button>{' '}
                            </div>
                        </td>
                        <td>en proceso</td>
                    </tr>
                    <tr>
                    <td>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p>Jornada IA P5</p>
                                </div>
                                <div className='buttons'>
                                    <Button variant="light">Editar</Button>{' '}
                                    <Button variant="warning">Eliminar</Button>{' '}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='button-active'>
                                <Button variant="light">Activar</Button>{' '}
                            </div>
                        </td>
                        <td>finalizado</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default TableAdmin;
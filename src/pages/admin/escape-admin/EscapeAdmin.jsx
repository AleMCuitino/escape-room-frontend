import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Navbar from '../../../components/admin/navbar/NavbarAdmin';
import AddRoom from '../../../components/admin/dashboard/add-room/AddRoom';
import Footer from '../../../components/admin/footer/FooterAdmin';
import { Container } from 'react-bootstrap';

const EscapeRoom = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <h1 className='mt-5 mb-5'>Jornada selección P33</h1>
                <AddRoom />
                <Table striped className='mt-5 mb-5'>
                    <thead>
                        <tr>
                            <th>ID sala</th>
                            <th>Núm de participantes</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <Link to="/escape-admin" ><p>Jornada selección P33</p></Link>
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
            <Footer />
        </div>
    )
}

export default EscapeRoom

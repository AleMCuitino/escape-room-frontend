import React from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../../components/admin/navbar/NavbarAdmin';
import Button from 'react-bootstrap/Button';
import AddUsers from '../../../components/admin/dashboard/add-users/AddUsers'
import Footer from '../../../components/admin/footer/FooterAdmin';
import { MainUsers } from './usersEscapeStyled';
import ModalPoints from '../../../components/admin/dashboard/modal-points/ModalPoints';
import Deco1 from '../../../assets/elements/decoration1.svg';


function UsersEscape() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Navbar />
            <MainUsers className='container'>
                <h1 className='mt-5'>P7</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Participantes</th>
                            <th>Sala</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Gary Limón</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </Table>
                <section className='view-points m-5 d-flex justify-content-center align-items-center'>
                    <Button className='add-users-button mb-5' variant="primary" onClick={() => setModalShow(true)}>
                        Ver puntuación
                    </Button>
                    <ModalPoints
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <img className='deco1 img-fluid' src={Deco1} alt="" />
                </section>
                <section className='add-users'>
                    <AddUsers />
                </section>
            </MainUsers>
            <Footer />
        </div>
    );
}

export default UsersEscape;
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../../../components/admin/navbar/NavbarAdmin';
import Button from 'react-bootstrap/Button';
import AddUsers from '../../../components/admin/dashboard/add-users/AddUsers'
import Footer from '../../../components/admin/footer/FooterAdmin';
import { MainUsers } from './usersEscapeStyled';
import ModalPoints from '../../../components/admin/dashboard/modal-points/ModalPoints';
import Deco1 from '../../../assets/elements/decoration1.svg';
import { useParams } from 'react-router-dom';
import { getEscapeById, getUsersInEscapeById } from '../../../services/escape.service';


function UsersEscape() {

    const { id } = useParams();

    const [modalShow, setModalShow] = useState(false);

    const [escapeRoom, setEscapeRoom] = useState(null);

    const [usersEscape, setUsersEscape] = useState(null);

    const getEscape = async (id) => {

        try {
            const { data } = await getEscapeById(id);
            console.log(data)
            setEscapeRoom(data);
        }
        catch (error) {
            console.log(error)
        }
    }

    const getUsersInEscape = async (id) => {

        try {
            const { data } = await getUsersInEscapeById(id);
            console.log(data.users)
            setUsersEscape(data.users);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEscape(id)
        getUsersInEscape(id)
    }, [])

    return (
        <div>
            <Navbar />
            <MainUsers className='container'>
                <h1 className='mt-5'>{escapeRoom?.escape?.title}</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Participantes</th>
                            <th>Sala</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersEscape.length > 0 ? usersEscape.map(user => {
                            return <tr key={user.id}>
                                <td>{user?.id}</td>
                                <td>{user?.name}</td>
                                <td>{user?.room_id}</td>
                            </tr>
                        }) : <tr>no hay usuarios</tr>}
                    </tbody>
                </Table>
                <section className='view-points m-5 d-flex justify-content-center align-items-center'>
                    <Button className='add-users-button mb-5' variant="primary" onClick={() => setModalShow(true)}>
                        Ver puntuación
                    </Button>
                    <ModalPoints
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        escapeRoom={escapeRoom}
                    />
                    <img className='deco1 img-fluid' src={Deco1} alt="" />
                </section>
                <section className='add-users'>
                    <AddUsers id={id}/>
                </section>
            </MainUsers>
            <Footer />
        </div>
    );
}

export default UsersEscape;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Navbar from '../../../components/admin/navbar/NavbarAdmin';
import AddRoom from '../../../components/admin/dashboard/add-room/AddRoom';
import Footer from '../../../components/admin/footer/FooterAdmin';
import { Container } from 'react-bootstrap';
import { getEscapeById } from '../../../services/escape.service';

const EscapeRoom = () => {

    const { id } = useParams();

    console.log(id)

    const [escapeRoom, setEscapeRoom] = useState(null);

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

    useEffect(() => {
        getEscape(id)
    }, [])


    return (
        <div>
            <Navbar />
            <Container>
                <h1 className='mt-5 mb-5'>{escapeRoom ? escapeRoom.escape.title + ' ' + `(${escapeRoom.escape.time} min)` : "title"}</h1>
                <AddRoom  update={true} idEscape={escapeRoom?.escape?.id}/>
                <Table striped className='mt-5 mb-5'>
                    <thead>
                        <tr>
                            <th>ID salas</th>
                            <th>Núm de participantes</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {escapeRoom?.escape.rooms.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <Link to="/escape-admin" ><p>{item?.id}</p></Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{item?.users?.length}</p>
                                    </td>
                                    <td><div className='button-active'>
                                        <Button variant="warning">Eliminar</Button>
                                    </div></td>
                                </tr>
                            )
                        })}



                    </tbody>
                </Table>
            </Container>
            <Footer />
        </div>
    )
}

export default EscapeRoom
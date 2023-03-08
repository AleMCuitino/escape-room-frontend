import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getEscapes, deleteEscapes, sendEmailsToUsersInRooms } from '../../../../services/escape.service';
import { CssTableProvider } from './tableAdminStyled';
import { ReactComponent as IconEdit } from '@/assets/icons/edit.svg';
import { ReactComponent as IconDelete } from '@/assets/icons/delete.svg';
import { ReactComponent as IconSend } from '@/assets/icons/send.svg';

function TableAdmin() {


    const [escapes, setEscapes] = useState([]);

    const getEscapesTable = async () => {

        try {
            const { data } = await getEscapes();
            console.log(escapes)
            setEscapes(data.escape);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEscapesTable();
    }, [])

    const deleteEscapeTable = async (id) => {

        try {
            const { data } = await deleteEscapes(id);
        }

        catch (error) {
            console.log(error)
        }
    }

    const handleDelete = (id, title) => {
        swal({
            title: `¿Confirma que desea eliminar este escape room ${title}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteEscapeTable(id)
                    swal(`Ha eliminado el escape room ${title}`, {
                        icon: "success",
                    });
                    getEscapesTable();
                } else {

                }
            });


    }

    const sendEmailsToUsers = async (id) => {
        try {
            const { data } = await sendEmailsToUsersInRooms(id);
            swal({
                title: `Se enviaron las invitaciones`,
                icon: "success",
            })
        }

        catch (error) {
            console.log(error)
        }
    }

    const handleSendEmails = (id) => {
        swal({
            title: `¿Desea confirmar?`,
            text: 'Está a punto de enviar un correo con el acceso a todas las personas añadidas a este Escape Room',
            icon: "info",
            buttons: [true, 'De acuerdo'],
        })
            .then((willDelete) => {
                if (willDelete) {
                    sendEmailsToUsers(id);
                } else {

                }
            });
    }



    return (
        <CssTableProvider>


            <Table className='bg-white showTable' striped>
                <thead>
                    <tr>
                        <th>Escape-room</th>
                
                        <th className='status'>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        escapes?.length > 0 ? escapes.map((item) => {
                            return <tr key={item.id}>
                                <td className='rooms'>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        
                                            <Link to={`/add-participants/${item.id}`} >{item.title}</Link>
                                        
                                        <div className='buttons hover-actions'>
                                        
                                            <Link to={`/escape-admin/${item.id}`} ><Button variant="light" ><span className='d-none d-md-inline'>Editar </span><IconEdit/></Button></Link>
                                            <Button variant="warning" onClick={() => handleDelete(item.id, item.title)}><span className='d-none d-md-inline'>Eliminar </span> <IconDelete/></Button>
                                            <Button variant="light" onClick={() => handleSendEmails(item.id)}><span className='d-none d-md-inline'>Activar </span> <IconSend/></Button>
                                        
                                            {' '}
                                        </div>
                                    </div>
                                </td>
                            
                                <td className='status'>{item.status}</td>
                            </tr>
                        })

                            : <tr>
                                <td>
                                    No hay ningún escape room
                                </td>
                            </tr>
                    }

                </tbody>
            </Table>

        </CssTableProvider>
    );
}

export default TableAdmin;
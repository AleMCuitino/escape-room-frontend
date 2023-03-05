import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getEscapes, deleteEscapes } from '../../../../services/escape.service';

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

        console.log(id)
        console.log(title)

        swal({
            title: `¿Estás seguro de eliminar este escape room ${title}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteEscapeTable(id)
                    swal(`Eliminaste el escape room ${title}`, {
                        icon: "success",
                    });
                    getEscapesTable();
                } else {

                }
            });


    }



    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Edición Escape-room</th>
                    <th>Acción</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {
                    escapes ? escapes.map((item) => {
                        return <tr key={item.id}>
                            <td>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className='buttons'>
                                        <Link to={`/escape-admin/${item.id}`} ><Button variant="light">Editar</Button></Link>
                                        <Button variant="warning" onClick={() => handleDelete(item.id, item.title)}>Eliminar</Button>{' '}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='button-active'>
                                    <Button variant="light">Activar</Button>{' '}
                                </div>
                            </td>
                            <td>{item.status}</td>
                        </tr>
                    })

                        : 'no hay escaperoms'
                }

            </tbody>
        </Table>
    );
}

export default TableAdmin;
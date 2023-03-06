import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function ModalPoints(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Puntuaciones
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='m-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Salas</th>
                            <th>Puntos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props?.escapeRoom?.escape?.rooms?.map(item => {
                            return (
                                <tr key={item?.id}>
                                    <td>{item?.id}</td>
                                    <td>{item?.points}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalPoints;
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SpaceAdd } from './addRoomStyled';

function AddRoom() {
    return (
        <SpaceAdd>
            <Form className="form-space">
                <div className="m-4 gap-4 d-flex">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre ejemplo EscapeRoom" />
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Tiempo</Form.Label>
                        <Form.Control placeholder="120 min" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Cantidad de salas</Form.Label>
                        <Form.Select defaultValue="1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <Button className='button-add mt-3 mb-3' type="submit">
                    Añadir Escape Room
                </Button>
            </Form>
        </SpaceAdd>
    );
}

export default AddRoom;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormSpace } from './addUsersStyled';

function BasicExample() {
    return (
        <FormSpace>
            <Form className="form-space">
                <div className='mt-4 gap-3 d-flex'>
                    <Form.Group className="user-box mb-3" controlId="formBasicEmail">
                        <Form.Label>Participante</Form.Label>
                        <Form.Control type="text" placeholder="Nombre Ejemplo Ejemplar" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridState">
                        <Form.Label>Sala</Form.Label>
                        <Form.Select defaultValue="1" required>
                            {
                                Array.from({ length: 10 }, (_, i) => i + 1).map((number) => {
                                    return <option key={number} value={number}>{number}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                </div>
                <Form.Group className="mail-box mb-5" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar correo electrónico"/>
                </Form.Group>
                <Button className='button-add-users mb-5' variant="primary" type="submit">
                    Añadir participante 
                </Button>
            </Form>
        </FormSpace>
    );
}

export default BasicExample;
import Button from 'react-bootstrap/Button';
import { FormSpace } from './addAdminStyled'
import Form from 'react-bootstrap/Form';

function AddAdmin() {
    return (
        <FormSpace>
            <Form className="form-space m-5">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Rol de usuario</Form.Label>
                    <Form.Select className="place-holder" aria-label="Rol">
                        <option>Rol</option>
                        <option value="1">Administardor</option>
                        <option value="2">Super administrador</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control className="place-holder" type="name" placeholder="Nombre Ejemplo Ejemplar" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control className="place-holder" type="email" placeholder="ejemplo@factoriaf5.com" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Crear contraseña</Form.Label>
                    <Form.Control className="place-holder" type="password" placeholder="Nueva contraseña" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control className="place-holder" type="password" placeholder="Confirmar nueva contraseña" />
                </Form.Group>
                <Button className="button-add-admin mt-2 mb-2" variant="primary" type="submit">
                    Añadir usuario
                </Button>
            </Form>
        </FormSpace>
    );
}

export default AddAdmin;
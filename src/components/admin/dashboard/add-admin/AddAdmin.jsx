import Button from 'react-bootstrap/Button';
import { FormSpace } from './addAdminStyled'
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { register_admin } from '../../../../services/user.service';

function AddAdmin() {

    const { register, handleSubmit } = useForm();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(onSubmit)();
    };

    const onSubmit = data => swal({
        title: 'Se está añadiendo una persona con rol de admin:',
        text: `Correo: ${data.email},     Contraseña: ${data.password} `,
        icon: "info",
        buttons: [true, 'Continuar'],
    })
        .then((accept) => {
            if (accept) {
                handleCreateAdmin(data)
            } else {

            }
        });

    const handleCreateAdmin = async (formData) => {

        try {
            const { data } = await register_admin(formData);
            swal(`Se añadió con éxito una nueva administradora`, {
                icon: "success",
            });
            window.location.reload()
        }
        catch (error) {
            if (error.response.data.message === "The email has already been taken. (and 1 more error)") {
                swal(`Este correo ya está en uso `, {
                    icon: "error",
                });
            }
            else if(error.response.data.message === 'The password confirmation does not match.'){
                swal(`La contraseña y la confirmación de la contraseña no coinciden  `, {
                    icon: "error",
                }); 
            }
            else {
                swal(`Error desconocido`, {
                    icon: "error",
                });
            }
        }
    }

    return (
        <FormSpace className="col-12 col-md-10 col-lg-9 mx-auto">
            <Form className="form-space m-5" onSubmit={handleFormSubmit}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Rol de usuario</Form.Label>
                    <Form.Select className="place-holder" required aria-label="Rol" >
                        <option value="1">Admin</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control className="place-holder" type="name" placeholder="Nombre Ejemplo Ejemplar" required {...register("name")} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control className="place-holder" type="email" placeholder="ejemplo@factoriaf5.com" required {...register("email")} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Crear contraseña</Form.Label>
                    <Form.Control className="place-holder" min={6} type="password" placeholder="Nueva contraseña" required {...register("password")} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control className="place-holder" min={6} type="password" placeholder="Confirmar nueva contraseña" required {...register("password_confirmation")} />
                </Form.Group>
                <Button className="button-add-admin mt-2 mb-2 p-3" variant="primary" type="submit">
                    Añadir
                </Button>
            </Form>
        </FormSpace>
    );
}

export default AddAdmin;
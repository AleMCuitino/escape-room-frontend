import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SpaceAdd } from './addRoomStyled';
import { useForm } from "react-hook-form";
import { createEscape } from '../../../../services/escape.service';


function AddRoom() {

    const { register, handleSubmit } = useForm();


    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(onSubmit)();
    };

    const handleCreateEscape = async (formData) => {

        try {
            const { data } = await createEscape(formData);
            window.location.reload()
        }
        catch (error) {
            console.log(error)
        }
    }

    const onSubmit = data => swal({
        title: `¿Estás seguro de crear un nuevo escape room?`,
        icon: "info",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                handleCreateEscape(data);
                swal(`Has creado un nuevo escape room`, {
                    icon: "success",
                });
            } else {
                
            }
        });


    return (
        <SpaceAdd>
            <Form className="form-space" onSubmit={handleFormSubmit}>
                <div className="m-4 gap-4 d-flex">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" required placeholder="Nombre ejemplo EscapeRoom" {...register("title")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Tiempo</Form.Label>
                        <Form.Control placeholder="120 min" required type='number' min={0} {...register("time")} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Cantidad de salas</Form.Label>
                        <Form.Select defaultValue="1" required {...register("rooms_amount")}>
                            {
                                Array.from({ length: 10 }, (_, i) => i + 1).map((number) => {
                                    return <option key={number} value={number}>{number}</option>
                                })
                            }
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
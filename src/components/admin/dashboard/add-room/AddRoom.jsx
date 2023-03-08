import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SpaceAdd } from './addRoomStyled';
import { useForm } from "react-hook-form";
import { createEscape, updateEscape } from '../../../../services/escape.service';


function AddRoom({ update, idEscape }) {

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

    const handleUpdateEscape = async (formData) => {

        try {
            const { data } = await updateEscape(idEscape, formData);
            console.log(data)
            window.location.reload()
        }
        catch (error) {
            console.log(error)
        }
    }

    const onSubmit = data => swal({
        title: update ? `¿Confirma que desea editar este escape room?` : `¿Confirma que desea crear un nuevo escape room?`,
        icon: "info",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                if (update) {
                    handleUpdateEscape(data);
                    swal(`Se ha editado el escape room`, {
                        icon: "success",
                    });
                }
                else {

                    handleCreateEscape(data);
                    swal(`Se ha creado un nuevo escape room`, {
                        icon: "success",
                    });
                }
            } else {

            }
        });


    return (
        <SpaceAdd>
            <Form className="form-space py-4 px-3" onSubmit={handleFormSubmit}>
                    <div className='row mb-3'>
                        <Form.Group className="col-12 col-lg-4" controlId="formGridEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" required placeholder="Nombre ejemplo EscapeRoom" {...register("title")} />
                        </Form.Group>
                        <Form.Group className="col-12 col-lg-4" controlId="formGridAddress1">
                            <Form.Label>Tiempo</Form.Label>
                            <Form.Control placeholder="120 min" required type='number' min={0} {...register("time")} />
                        </Form.Group>
                        <Form.Group className='col-12 col-lg-4' controlId="formGridState">
                            <Form.Label>Nº de salas</Form.Label>
                            <Form.Select defaultValue="1" required {...register("rooms_amount")}>
                                {
                                    Array.from({ length: 10 }, (_, i) => i + 1).map((number) => {
                                        return <option key={number} value={number}>{number}</option>
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                    </div>
              
                <Button className='w-100 button-add p-3 mb-3' type="submit">
                    {update? 'Actualizar escape room' : 'Añadir escape room'}
                </Button>
            </Form>
        </SpaceAdd>
    );
}

export default AddRoom;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addParticipants, getEscapeById} from '../../../../services/escape.service';
import { useForm } from "react-hook-form";
import { FormSpace } from './addUsersStyled';
import { useEffect, useState } from 'react';

function AddUsers({id}) {
    
    const [escapeRoom, setEscapeRoom] = useState(null);

    const getEscape = async (idEscape) => {

        try {
            const { data } = await getEscapeById(idEscape);
            setEscapeRoom(data);
        }
        catch (error) { 
            console.log(error)
        }
    }
    useEffect(() => {

        getEscape(id);

    }, [])
    


    const { register, handleSubmit } = useForm();


    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(onSubmit)();
    };

    const onSubmit = (data) =>{
        swal({
            title: `Estás añadiendo a ${data.name} a la sala ${data.room_id}`,
            icon: "info",
            buttons:[true, 'Continuar'],
        })
            .then((willDelete) => {
                if (willDelete) {
                    handleAddParticipantAssignRoom(data);
                } else {

                }
            });
        
    }

    const handleAddParticipantAssignRoom = async (formData) => {

        try {
            const { data } = await addParticipants(formData);
            swal(`Añadiste correctamente a`, {
                icon: "success",
            });
            window.location.reload()
        }
        catch (error) {
            console.log(error);
            if(error.response.data.message === "The email has already been taken. (and 1 more error)"){
                swal(`Este correo ya está en uso `, {
                    icon: "error",
                });
            }
            else{
                swal(`Error al seleccionar la sala`, {
                    icon: "error",
                });
            }
        }
    }
    

    return (
        <FormSpace className='col-12 col-md-10 col-lg-8 mx-auto'>
            <Form className="form-space" onSubmit={handleFormSubmit}>
                <div className='row mb-3'>
                    <Form.Group className="col-6" controlId="formBasicEmail">
                        <Form.Label>Participante</Form.Label>
                        <Form.Control type="text" placeholder="Nombre Ejemplo Ejemplar" required {...register("name")}/>
                    </Form.Group>
                    <Form.Group className="col-6" controlId="formGridState">
                        <Form.Label>Sala</Form.Label>
                        <Form.Select  required {...register("room_id")}>
                            {
                                escapeRoom?.escape?.rooms.map(room =>{
                                    return (
                                        <option key={room.id} value={room?.id}>{room?.id}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                </div>
                <Form.Group className="col-12 mb-4" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar correo electrónico" required {...register("email")} />
                </Form.Group>
                <Button className='button-add-users mb-2 p-3' variant="primary" type="submit">
                    Añadir participante 
                </Button>
            </Form>
        </FormSpace>
    );
}

export default AddUsers;
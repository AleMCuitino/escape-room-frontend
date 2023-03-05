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
            console.log(escapeRoom?.escape?.rooms)
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
        console.log("info del formualrio de añadir", data)
        handleAddParticipantAssignRoom(data)
    }

    const handleAddParticipantAssignRoom = async (formData) => {

        try {
            const { data } = await addParticipants(formData);
            console.log('data fetch', data)
            window.location.reload()
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <FormSpace>
            <Form className="form-space" onSubmit={handleFormSubmit}>
                <div className='mt-4 gap-3 d-flex'>
                    <Form.Group className="user-box mb-3" controlId="formBasicEmail">
                        <Form.Label>Participante</Form.Label>
                        <Form.Control type="text" placeholder="Nombre Ejemplo Ejemplar" {...register("name")}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridState">
                        <Form.Label>Sala</Form.Label>
                        <Form.Select defaultValue="1" required {...register("room_id")}>
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
                <Form.Group className="mail-box mb-5" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar correo electrónico" {...register("email")} />
                </Form.Group>
                <Button className='button-add-users mb-5' variant="primary" type="submit">
                    Añadir participante 
                </Button>
            </Form>
        </FormSpace>
    );
}

export default AddUsers;
import React from 'react'
import { ContainerText } from '../../../components/animations/animations-styled'
import {Submit} from '@/styled-components/containers-styled';
import { Link } from 'react-router-dom';


const Final = () => {
  return (
    <div>
        <ContainerText>
            <h1>Felicitaciones! </h1>
            <h3>Han acabado el juego. Gracias por participar</h3>
            <Submit> Comparte tu experiencia
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf46_HCcQi7L0jyGAnQ7hxvVekzY55hd0c3KoXlNheb_GJ6vQ/viewform?embedded=true" width="640" height="1073" frameborder="0" marginheight="0" marginwidth="0"></Link> </Submit>
        </ContainerText>
    </div>
  )
}

export default Final


import React from 'react'

import { Container , Title , Paragraph } from '@/components/container/containers-styled';
import CountDown from './CountDown';


const ContainerMain = (props) => {
  return (


    <div className='d-flex vh-100 flex-column justify-content-around align-items-center' >

        <div className='d-flex justify-content-start'>
          <Title > //// {props.city} / año {props.year} </Title>
        </div>

        <CountDown/>

        <Container> 
            <Paragraph >{props.text} Hola soy texto con props Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </Paragraph>
        </Container>
    </div>
  )
}

export default ContainerMain
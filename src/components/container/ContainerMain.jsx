import React from 'react'
import { Container , Paragraph, } from '@/components/container/containers-styled';
import Location from './Location';
import Answer from './Answer';


const ContainerMain = (props) => {
  return (

    <div className='container  vh-100 ' >

          <Location className='col-6 col-sm-4 '/>
          <Container className='col-12 ' > 
              <Paragraph className='col-10 col-sm-10'>{props.text} Hola soy texto con props Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
              </Paragraph>
          </Container>
          
          <Answer/>

    </div>
  )
}

export default ContainerMain
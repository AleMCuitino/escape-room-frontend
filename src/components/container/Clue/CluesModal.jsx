import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { ClueModalWindow } from '@/styled-components/containers-styled';


const CluesModal = (props) => {
  
  return (
    <>
      <ClueModalWindow
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
          <Modal.Header closeButton>  
          </Modal.Header>
          <Modal.Body>

            { props.clue !== "" ? <img className='img-fluid mx-auto d-block mb-3' src={props.clue} />  : "" }

            { props.text !== "" ?
            <>
            <p className='text-center'>{props.text}</p>
            </>
             : "" }
           
         
             
          
          </Modal.Body>
      
    </ClueModalWindow>
    </>

  )
}

export default CluesModal
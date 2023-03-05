import React from 'react'
import Clock from '@/assets/helpers/compass.png';
import { ClueButton } from '../../../styled-components/containers-styled';
import CluesModal from './CluesModal';

const Clues = (props) => {

    const [modalShow, setModalShow] = React.useState(false);
    return (
        
    <>
        <ClueButton src={props.img} result={props.result} alt="clue"  onClick={() => setModalShow(true)}/> 

        <CluesModal 
        clue={props.clue}
        text={props.text}
        show={modalShow}
        onHide={() => setModalShow(false)}
        />

    </>
  )
}

export default Clues
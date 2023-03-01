import React from 'react'
import Clock from '@/assets/helpers/compass.png';
import { ClueButton } from '../containers-styled';
import CluesModal from './CluesModal';

const Clues = () => {

    const [modalShow, setModalShow] = React.useState(false);
    return (
        
    <div>
        <ClueButton src={Clock}  alt="clue"  onClick={() => setModalShow(true)}/> 

        <CluesModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />


    </div>
  )
}

export default Clues
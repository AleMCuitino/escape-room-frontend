import React from 'react'
import F1 from '@/assets/buttons/F1.svg';
import F2 from '@/assets/buttons/F2.svg';
import F3 from '@/assets/buttons/F3.svg';
import F4 from '@/assets/buttons/F4.svg';
import F5 from '@/assets/buttons/F5.svg';
import F6 from '@/assets/buttons/F6.svg';
import F7 from '@/assets/buttons/F7.svg';
import { ButtonF} from './start-styled';
import { Link } from 'react-router-dom';


const ButtonsF = () => {

  return (
    <>

        <div className=' d-flex justify-content-between'>
            <Link to="/trip/stage-zero"> <ButtonF src={F1}  alt=""  /></Link>
            <Link to="/trip/stage-zero"> <ButtonF src={F2}  alt=""  /></Link>
            <Link to="/trip/stage-zero"> <ButtonF src={F3}  alt=""  /></Link>
            <Link to="/trip/stage-zero"> <ButtonF src={F4}  alt=""  /></Link>
        </div>
        <div className=' d-flex justify-content-around'>
            <Link to="/trip/stage-zero"> <ButtonF src={F5}  alt=""  /></Link>
            <Link to="/trip/stage-zero"> <ButtonF src={F6}  alt=""  /></Link>
            <Link to="/trip/stage-zero"> <ButtonF src={F7}  alt=""  /></Link>
        </div>

    </>
  )
}

export default ButtonsF
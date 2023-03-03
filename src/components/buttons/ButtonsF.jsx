import React from 'react'
import F1 from '@/assets/buttons/f1.svg';
import F2 from '@/assets/buttons/f2.svg';
import F3 from '@/assets/buttons/f3.svg';
import F4 from '@/assets/buttons/f4.svg';
import F5 from '@/assets/buttons/f5.svg';
import F6 from '@/assets/buttons/f6.svg';
import F7 from '@/assets/buttons/f7.svg';
import { ButtonF} from './start-styled';
import { Link } from 'react-router-dom';


const ButtonsF = () => {
  return (
    <>

        <div className=' d-flex justify-content-between'>
            <Link to="/"> <ButtonF src={F1}  alt=""  /></Link>
            <Link to="/"> <ButtonF src={F2}  alt=""  /></Link>
            <Link to="/"> <ButtonF src={F3}  alt=""  /></Link>
            <Link to="/"> <ButtonF src={F4}  alt=""  /></Link>
        </div>
        <div className=' d-flex justify-content-around'>
            <Link to="/home"> <ButtonF src={F5}  alt=""  /></Link>
            <Link to="/"> <ButtonF src={F6}  alt=""  /></Link>
            <Link to="/"> <ButtonF src={F7}  alt=""  /></Link>
        </div>

    </>
  )
}

export default ButtonsF
import React from 'react';
import Navbar from '../../../components/navbar/NavbarAdmin';
import { Board } from './boardAdminStyled';
import Footer from '../../../components/footer/FooterAdmin';


const BoardAdmin = () => {
    return (
        <div>
            <Navbar />
            <Board>
                <h1 className='container pt-5'>Escape Rooms</h1>
            </Board>
            <Footer />

        </div>
    )
}

export default BoardAdmin

import React, { useState } from 'react';
import Navbar from '../../../components/admin/navbar/NavbarAdmin';
import { Board } from '../board-admin/boardAdminStyled';
import TableAdmin from '@/components/admin/dashboard/table-admin/TableAdmin';
import AddRoom from '../../../components/admin/dashboard/add-room/AddRoom';
import Flower1 from'../../../assets/elements/flower2.svg';
import Flower2 from'../../../assets/elements/flower1.svg';
import Footer from '@/components/admin/footer/FooterAdmin';


const BoardAdmin = () => {

    return (
        <div>
            <Navbar />
            <Board className='container'>
                <section className='row justify-content-start'>
                    <div className='col-7'>
                        <h1 className='pt-5'>Escape Rooms</h1>
                        <TableAdmin />
                    </div>
                    <div className='col-5'>
                        <h2 className='fs-4 pt-5'>Añadir un Escape Room</h2>
                        <div className='add-form'>
                            <AddRoom />
                        </div>
                    </div>
                </section>
                <div className='flower'>
                    <img src={Flower2}></img>
                </div>
                <div className='flower1'>
                    <img src={Flower1}></img>
                </div>
            </Board>
            <Footer />
        </div>
    )
}

export default BoardAdmin

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
        <>
            <Navbar />
            <Board className='container'>
                <section className='row justify-content-start'>
                    <h1 className='pt-5 mb-4'>Escape Rooms</h1>
                    <div className='col-12 col-lg-7 mb-4 order-0 order-md-1 pt-0 pt-md-5'>
                        <TableAdmin />
                    </div>
                    <div className='col-12 col-lg-5 order-1 order-md-0'>
                        <h2 className='fs-4'>Añadir un Escape Room</h2>
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
        </>
    )
}

export default BoardAdmin

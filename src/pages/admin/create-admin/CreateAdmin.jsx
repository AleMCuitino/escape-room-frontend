import React, { useState } from 'react';
import Navbar from '../../../components/admin/navbar/NavbarAdmin';
import AddAdmin from '../../../components/admin/dashboard/add-admin/AddAdmin';
import { CreateSpace } from './createAdminStyled';
import Flower1 from'../../../assets/elements/flower2.svg';
import Flower2 from'../../../assets/elements/flower1.svg';
import Footer from '@/components/admin/footer/FooterAdmin';


const CreateAdmin = () => {

    return (
        <div>
            <Navbar />
            <CreateSpace className='container'>
                <h1 className='mt-5 mb-5'>Crear usuario administrador</h1>
                <AddAdmin />
                <div className='flower'>
                    <img src={Flower2}></img>
                </div>
                <div className='flower1'>
                    <img src={Flower1}></img>
                </div>
            </CreateSpace>
            <Footer />
        </div>
    )
}

export default CreateAdmin;

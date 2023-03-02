import React from 'react';
import Navbar from '../../../components/admin/navbar/NavbarAdmin';
import { Board } from '../board-admin/boardAdminStyled';
import TableAdmin from '@/components/admin/dashboard/table-admin/TableAdmin';
import Footer from '@/components/admin/footer/FooterAdmin';


const BoardAdmin = () => {
    return (
        <div>
            <Navbar />
            <Board>
                <h1 className='container pt-5'>Escape Rooms</h1>
                <TableAdmin />
            </Board>
            <Footer />

        </div>
    )
}

export default BoardAdmin

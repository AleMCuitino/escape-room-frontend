import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import IconGit from '@/assets/icons/github.png';
import { FooterIcon } from './footerAdminStyled';

function FooterAdmin() {
    return (
        <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
            <Container className=''>
                <Navbar.Brand className='text-footer fs-6'>Code with {"{❤️}"} by Grupo#2 P5-850H</Navbar.Brand>
                <div className='icons-git fs-6 gap-5 d-flex justify-content-center'>
                        <FooterIcon className='icon-git'>
                            <img className='img-fluid d-flex justify-content-center' src={IconGit}></img>
                            <p>Front-end</p>
                        </FooterIcon>
                        <FooterIcon className='icon-git'>
                            <img className='img-fluid d-flex' src={IconGit}></img>
                            <p>Back-end</p>
                        </FooterIcon>
                </div>
            </Container>
        </Navbar>
    );
}

export default FooterAdmin;
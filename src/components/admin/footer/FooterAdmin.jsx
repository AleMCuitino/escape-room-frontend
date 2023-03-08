import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import IconGit from '@/assets/icons/github.png';
import { FooterIcon } from './footerAdminStyled';
import { Link } from 'react-router-dom';

function FooterAdmin() {
    return (
        <Navbar className='mt-auto' expand="lg" variant="light" bg="light">
            <Container className=''>
                <Navbar.Brand className='col-12  text-center text-md-start col-md-6 text-footer fs-6 me-0'>Code with {"{❤️}"} by Grupo#2 P5-850H</Navbar.Brand>
                <div className='col-12 col-md-6 icons-git text-center text-md-start fs-6 gap-5 d-flex justify-content-center justify-content-md-end'>

                    
                        <FooterIcon className='icon-git d-flex flex-column alig-items-center' as={Link} to="https://github.com/AleMCuitino/escape-room-frontend">
                            
                            <img className='img-fluid d-flex justify-content-center' src={IconGit}></img>
                            <p className='mb-0'>Front-end</p>
                           
                        </FooterIcon>
                        <FooterIcon className='icon-git d-flex flex-column alig-items-center ' as={Link} to="https://github.com/fcegatti/escape-room-backend">
                           
                            <img className='img-fluid d-flex' src={IconGit}></img>
                            <p className='mb-0'>Back-end</p>
                          
                        </FooterIcon>
                </div>
            </Container>
        </Navbar>
    );
}

export default FooterAdmin;
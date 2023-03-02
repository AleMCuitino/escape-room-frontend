import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import IconGit from '../../assets/icons/github.png';

function FooterAdmin() {
    return (
        <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
            <Container className=''>
                <Navbar.Brand className='text-footer fs-6'>Code with love by Grupo #2 P5-850H</Navbar.Brand>
                <div  className='icons-git fs-6 gap-5 d-flex justify-items-center'>
                    <div>
                        <img src={IconGit}></img>
                        <p>Front-end</p>
                    </div>
                    <div>
                        <img src={IconGit}></img>
                        <p>Back-end</p>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default FooterAdmin;
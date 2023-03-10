import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import '../components/NavComponent.css';
const NavComponent = () => {
    return (
        <div className='container-nav'>

            <Navbar bg="light" id='barra' expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#" id='name'>SBARRACHINACODE SLIDERS</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavComponent
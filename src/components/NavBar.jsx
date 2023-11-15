import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { CartWidget } from "./CartWidget"
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    
    return(
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">Inicio</NavLink>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="category/saludos">Saludos</NavLink>
                        <NavLink to="category/despedidas">Despedidas</NavLink>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    )
}
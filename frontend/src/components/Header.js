import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="warning" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Elizim</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                            <Nav.Link href="/link"><i className="fas fa-user"></i> Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </header>
    )
}

export default Header

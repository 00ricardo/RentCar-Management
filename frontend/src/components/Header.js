import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, NavDropdown, Nav, Navbar, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Row>
                <Navbar bg="info" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/">
                                <Nav.Link ><i className="fas fa-home"> Home</i></Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item href='/login'>Login</NavDropdown.Item>
                                <NavDropdown.Item href='/help'>Help</NavDropdown.Item>
                                <NavDropdown.Item href='/about'>About</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Form className="mr-auto">
                        <Container>
                            <Row>
                                <Col>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                </Col>
                                <Col>
                                    <Button variant="outline-light">Search</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Navbar>
            </Row>
        </header>
    )
}

export default Header

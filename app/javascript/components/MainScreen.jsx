import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

export default function MainScreen() {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav placement="end">
                        <Button variant="light">Log Out</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
};

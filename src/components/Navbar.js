import React from "react";
import CardWidget from "./CartWidget/CartWidget";
import './CartWidget/CartWidget.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logoTiendaBebidas.jpg'

    function ColorSchemesExample() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><img src = {logo} alt = "logo tienda"/></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#Cerveza">Cerveza</Nav.Link>
                <Nav.Link href="#Gin">Gin</Nav.Link>
                <Nav.Link href="#Whisky">Whisky</Nav.Link>
            </Nav>
            <CardWidget/>
            </Container>
        </Navbar>
    );
    }

export default ColorSchemesExample;
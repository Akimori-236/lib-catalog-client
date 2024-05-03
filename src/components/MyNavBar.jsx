import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DarkModeToggle from './DarkModeToggle';

export default function MyNavBar(props) {
    const links = [{
        name: "test", link: "/test"
    }, {
        name: "test2", link: "/test2"
    }]

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className="navbar-brand" href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#profile">Profile</Nav.Link>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            {links.map((link, index) => {
                                return <NavDropdown.Item key={index} href={link.link} >{link.name}</NavDropdown.Item>
                            })}
                        </NavDropdown>
                        <Nav><DarkModeToggle /></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


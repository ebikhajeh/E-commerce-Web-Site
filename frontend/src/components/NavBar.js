import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs'; // Importing cart icon from react-icons
import CategoryDropdown from './CategoryDropdown';
import AuthLinks from './AuthLinks';

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/products">YaraShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Best Sellers</Nav.Link>
                        <Nav.Link href="#products">5-Star rated</Nav.Link>
                        <Nav.Link href="#about">New Arrivals</Nav.Link>
                        <CategoryDropdown />
                    </Nav>
                    {/* Search Bar */}
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-1"
                            //style={{ width: '470px' }}
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav>
                        <AuthLinks/>
                        {/* Support Link */}
                        <Nav.Link href="#support">Support</Nav.Link>
                        {/* Cart Icon */}
                        <Nav.Link href="/cart"><BsCart /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;

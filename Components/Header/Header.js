import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import css from './158930851_423559068712469_7880183188325655302_n (1).png';

const Header = () => {
    return (
        <div className="container bg">
            <div class="d-flex justify-content-between">
                <Navbar.Brand><Nav.Link as={Link} to="/" className="mr-md-3"><Button variant="outline-success">Home</Button></Nav.Link></Navbar.Brand>
                <Navbar.Brand as={Link} to="/"><h1>Sports Mania</h1></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        </div>
    )
};

export default Header;
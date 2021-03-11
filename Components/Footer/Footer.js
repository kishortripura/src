import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="text-center text-white">
            &copy; All right reserved By Kishor Tripura {new Date(). getFullYear()}
        </Container>
    );
};

export default Footer;
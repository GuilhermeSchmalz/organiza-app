import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-auto">
            <Container>
                <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
                <Nav className="justify-content-center">
                    <Nav.Link href="#privacy" className="text-white">Privacy Policy</Nav.Link>
                    <Nav.Link href="#terms" className="text-white">Terms of Service</Nav.Link>
                    <Nav.Link href="#contact" className="text-white">Contact Us</Nav.Link>
                </Nav>
            </Container>
        </footer>
    );
}

export default Footer;

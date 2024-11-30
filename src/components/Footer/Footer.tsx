import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Footer() {
    return (
        <footer id="footer" className="bg-dark text-white text-center py-2 mt-auto">
            <Container>
                <p>&copy; {new Date().getFullYear()} Organiza. Todos os direitos reservados.</p>
                <Nav className="justify-content-center">
                    <Nav.Link href="#privacy" className="text-white">Política de Privacidade</Nav.Link>
                    <Nav.Link href="#terms" className="text-white">Termos de Uso</Nav.Link>
                    <Nav.Link href="#contact" className="text-white">Contate-nos</Nav.Link>
                </Nav>
            </Container>
        </footer>
    );
}

export default Footer;

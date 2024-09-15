import { Container, Row, Col, Nav, Image, Button, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row className="bg-body-tertiary text-white">
                    <Col className="mx-5">
                        <Image src="" alt="Organiza Logo"/>
                    </Col>
                    <Col className="justify-items-center">
                        <Nav className="flex-row fs-5">
                        <Nav.Link href="#painel">Painel</Nav.Link>
                        <Nav.Link href="#receitas&despesas">Receitas e Despesas</Nav.Link>
                        <Nav.Link href="#orcamentos">Orçamentos</Nav.Link>
                        <Nav.Link href="#investimentos">Investimentos</Nav.Link>
                        <Nav.Link href="#relatorios">Relatórios</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
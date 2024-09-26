import { Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        sticky="top"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">Organiza</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#painel">Painel</Nav.Link>
              <Nav.Link href="#receitas&despesas">Receitas e Despesas</Nav.Link>
              <NavDropdown title="Recursos" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#orcamentos/3.2">
                  Orçamentos
                </NavDropdown.Item>
                <NavDropdown.Item href="#investimentos/3.3">
                  Investimentos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#relatorios/3.4">
                  Relatórios
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Pesquisar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">
                  <span></span>
                </Button>
              </Form>
              <Nav.Link href="#configuracao">Configurações</Nav.Link>
              <Nav.Link eventKey={2} href="#cadastro">
                Registre-se
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;

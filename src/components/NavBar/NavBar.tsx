import { Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "./style.css";

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
              <Link href="/Dashboard" id="navbar-link" className="rounded-md px-3 py-2">Painel</Link>
              <Link href="/Incomes" id="navbar-link" className="rounded-md px-3 py-2">Receitas</Link>
              <Link href="/Outcomes" id="navbar-link" className="rounded-md px-3 py-2">Despesas</Link>
              <NavDropdown title="Recursos" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#orcamentos/3.2">
                  <Link href="#" id="navbar-link" className="rounded-md px-3 py-2">
                    Orçamentos
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="#" id="navbar-link" className="rounded-md px-3 py-2">
                    Investimentos
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#relatorios/3.4">
                  <Link href="#" id="navbar-link" className="rounded-md px-3 py-2">
                    Relatórios
                  </Link>
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
                  <span>Buscar</span>
                </Button>
              </Form>
              <Link href="#configuracao" id="navbar-link" className="rounded-md px-3 py-2">
                Configurações
              </Link>
              <NavDropdown title="Login" id="collapsible-nav-dropdown">
                <NavDropdown.Item>
                  <Link href="/Login" id="navbar-link" className="rounded-md px-3 py-2">
                    Login
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item>
                  <Link href="/Signin" id="navbar-link" className="rounded-md px-3 py-2">
                    Registre-se
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;

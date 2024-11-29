import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

const WelcomePage: React.FC = () => {
  return (
    <footer>
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row>
          <Col className="text-center">
            <h1>Bem-vindo(a) ao Organiza!</h1>
            <p>O app definitivo para controle de finanças pessoais.</p>
            <Button variant="primary" size="lg" href="#get-started">Saiba mais!</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default WelcomePage;
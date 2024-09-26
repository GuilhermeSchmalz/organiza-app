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
            <h1>Welcome to MyApp!</h1>
            <p>Your journey to amazing experiences begins here.</p>
            <Button variant="primary" size="lg" href="#get-started">Get Started</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default WelcomePage;
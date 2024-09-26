import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
  return (
    <Container>
      <Form style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="fulano@email.com.br" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="********" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;

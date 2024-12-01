import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

function SettingsForm() {
  return (
    <Container>
      <Form style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
        <Form.Label className="mb-3 underline-offset-1">Configurações de Notificação</Form.Label>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Recorrência</Form.Label>
          <Form.Select aria-label="Escolha o periodo que deseja receber suas notificações">
            <option>Diariamente</option>
            <option>Quinzenalmente</option>
            <option>Mensalmente</option>
            <option>Bimensalmente</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tipos de notificação</Form.Label>
          <Form.Check
            type={'checkbox'}
            id={`default-checkbox`}
            label={`Pagamento de Conta`}
          />
          <Form.Check
            type={'checkbox'}
            id={`default-checkbox`}
            label={`Retirada de Investimento`}
          />
          <Form.Check
            type={'checkbox'}
            id={`default-checkbox`}
            label={`Vencimento de Fatura`}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Data padrão</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <hr />

        <Button variant="primary" type="submit" className="w-100">
          Salvar
        </Button>
      </Form>
    </Container>
  );
}

export default SettingsForm;
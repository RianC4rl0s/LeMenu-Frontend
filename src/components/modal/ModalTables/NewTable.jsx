import { useState } from "react";
import { Col, Form, Modal, Row, Button } from "react-bootstrap";

export default function NewTable() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="success" onClick={() => setShow(true)}>
        Nova
      </Button>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Nova Mesa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Codigo</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLogin">
                  <Form.Label>Cliente</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Total Pedido</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCpf">
                  <Form.Label>Disponibilidade</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>
              </Col>
            </Row>
            <div className="float-right"></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Adicionar</Button>
          <Button variant="danger" onClick={() => setShow(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

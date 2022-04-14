import { useState } from "react";
import {
  Col,
  Form,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
  Button,
} from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

export default function EditTables() {
  const [show, setShow] = useState(false);

  function renderModal() {
    return (
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Editar Mesa</Modal.Title>
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

          <Button variant="outline-danger">Deletar Mesa</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Atualizar</Button>
          <Button variant="danger" onClick={() => setShow(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip>
            <strong>Editar</strong>
          </Tooltip>
        }
      >
        <Button variant="info" onClick={() => setShow(true)}>
          <FaEdit color="white" />
        </Button>
      </OverlayTrigger>
      {renderModal()}
    </>
  );
}

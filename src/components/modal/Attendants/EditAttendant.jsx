import {
  Col,
  Form,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import * as Styled from "./styles";

import { FaPen } from "react-icons/fa";
const EditAttendant = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id={`tooltip-detalhes`}>
            <strong>Detalhes</strong>.
          </Tooltip>
        }
      >
        <Button variant="warning" onClick={handleShow}>
          {/* Editar */}
          <FaPen />
        </Button>
      </OverlayTrigger>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Editar Atendente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              {/* <Col>
                            </Col> */}
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLogin">
                  <Form.Label>Login</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>senha</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCpf">
                  <Form.Label>Cpf</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>
              </Col>
            </Row>
            <div className="float-right"></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Styled.ButtonGreen
            className="pull-right"
            type="sub"
            onClick={handleClose}
          >
            Salvar
          </Styled.ButtonGreen>
          <Styled.ButtonRed
            className="pull-right"
            type="sub"
            onClick={handleClose}
          >
            Cancelar
          </Styled.ButtonRed>
          {/* <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Salvar
                    </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditAttendant;

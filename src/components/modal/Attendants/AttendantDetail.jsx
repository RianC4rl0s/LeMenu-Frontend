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

import { FaFileAlt } from "react-icons/fa";
const AttendantDetail = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id={`tooltip-detalhes`}>
            <strong>Detalhes</strong>
          </Tooltip>
        }
      >
        <Button variant="primary" onClick={() => setShow(true)}>
          <FaFileAlt />
        </Button>
      </OverlayTrigger>

      <Modal show={show} size="lg">
        <Modal.Header closeButton onClick={() => setShow(false)}>
          <Modal.Title>Detalhes do Atendente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    placeholder={props.attendantDetails.name}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLogin">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    placeholder={props.attendantDetails.login}
                    disabled
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    placeholder={props.attendantDetails.password}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCpf">
                  <Form.Label>Cpf</Form.Label>
                  <Form.Control
                    placeholder={props.attendantDetails.cpf}
                    disabled
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    placeholder={props.attendantDetails.phone}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="float-right"></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Styled.ButtonRed
            className="pull-right"
            type="sub"
            onClick={() => setShow(false)}
          >
            Cancelar
          </Styled.ButtonRed>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AttendantDetail;

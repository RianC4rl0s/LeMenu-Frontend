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
import api from "../../../services/api";

import { FaPen } from "react-icons/fa";
const EditAttendant = (props) => {
  const [show, setShow] = useState(false);

  const [userName, setUserName] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCpf, setUserCpf] = useState("");
  const [userPhone, setUserPhone] = useState("");

  async function edit(id) {
    return api
      .put(`clerk/update/${id}`, {
        name: userName,
        cpf: userCpf,
        login: userLogin,
        password: userPassword,
        phone: userPhone,
      })
      .then(loadAttendant)
      .catch((err) => {
        console.error("ops! ocorreu um erro para criar" + err);
      });
  }

  function loadAttendant() {
    api
      .get("/clerk/search/all")
      .then((response) => props.attendantDataState(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro para listar" + err);
      });
  }

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id={`tooltip-edit`}>
            <strong>Editar</strong>
          </Tooltip>
        }
      >
        <Button variant="warning" onClick={() => setShow(true)}>
          <FaPen />
        </Button>
      </OverlayTrigger>

      <Modal show={show} size="lg">
        <Modal.Header closeButton onClick={() => setShow(false)}>
          <Modal.Title>Editar Atendente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    placeholder={null}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLogin">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    placeholder={null}
                    onChange={(e) => setUserLogin(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    placeholder={null}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCpf">
                  <Form.Label>Cpf</Form.Label>
                  <Form.Control
                    placeholder={null}
                    onChange={(e) => setUserCpf(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    placeholder={null}
                    onChange={(e) => setUserPhone(e.target.value)}
                  />
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
            onClick={() => {
              edit(props.attendantEdit);
              setShow(false);
            }}
          >
            Salvar
          </Styled.ButtonGreen>
          <Styled.ButtonRed
            className="pull-right"
            type="sub"
            onClick={() => {
              setShow(false);
            }}
          >
            Cancelar
          </Styled.ButtonRed>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditAttendant;

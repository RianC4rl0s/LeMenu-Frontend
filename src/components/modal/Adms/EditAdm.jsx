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
import { cpfMask } from "../../../utils/masks/cpf.js";
import { phoneMask } from "../../../utils/masks/phone.js";

import { FaPen } from "react-icons/fa";
const EditAdm = (props) => {
  const [show, setShow] = useState(false);

  const [userName, setUserName] = useState(props.adm.name);
  const [userLogin, setUserLogin] = useState(props.adm.login);
  const [userPassword, setUserPassword] = useState(props.adm.password);
  const [userCpf, setUserCpf] = useState(props.adm.cpf);
  const [userPhone, setUserPhone] = useState(props.adm.phone);

  async function edit(id) {
    return api
      .put(`clerk/update/${id}`, {
        name: userName,
        cpf: userCpf,
        login: userLogin,
        password: userPassword,
        phone: userPhone,
      })
      .then(loadAdm)
      .catch((err) => {
        console.error("ops! ocorreu um erro para criar" + err);
      });
  }

  function close() {
    setShow(false);
    setUserName("");
    setUserLogin("");
    setUserPassword("");
    setUserCpf("");
    setUserPhone("");
  }

  function loadAdm() {
    api
      .get("/clerk/search/alladm")
      .then((response) => props.admDataState(response.data))
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
        <Modal.Header closeButton onClick={() => close()}>
          <Modal.Title>Editar Administrador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    placeholder={props.adm.name}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLogin">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    placeholder={props.adm.login}
                    onChange={(e) => setUserLogin(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    placeholder={props.adm.password}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCpf">
                  <Form.Label>Cpf</Form.Label>
                  <Form.Control
                    placeholder={props.adm.cpf}
                    onChange={(e) => setUserCpf(cpfMask(e.target.value))}
                    value={userCpf}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    placeholder={props.adm.phone}
                    onChange={(e) => setUserPhone(phoneMask(e.target.value))}
                    value={userPhone}
                  />
                </Form.Group>
                Ao deixar o campo vazio,o valor não sera editado*
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
              edit(props.admEdit);
              setShow(false);
              close();
            }}
          >
            Salvar
          </Styled.ButtonGreen>
          <Styled.ButtonRed
            className="pull-right"
            type="sub"
            onClick={() => {
              close();
            }}
          >
            Cancelar
          </Styled.ButtonRed>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditAdm;

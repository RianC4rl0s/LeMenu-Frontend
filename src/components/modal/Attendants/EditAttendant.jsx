import {
  Col,
  Form,
  Modal,
  OverlayTrigger,
  Row,
  Spinner,
  Tooltip,
} from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import * as Styled from "./styles";
import api from "../../../services/api";
import { cpfMask } from "../../../utils/masks/cpf.js";
import { phoneMask } from "../../../utils/masks/phone.js";

import { FaPen } from "react-icons/fa";
// import attendants from "../../../pages/Attendants";
const EditAttendant = (props) => {
  const [show, setShow] = useState(false);

  const [userName, setUserName] = useState(props.attendant.name);
  const [userLogin, setUserLogin] = useState(props.attendant.login);
  const [userPassword, setUserPassword] = useState(props.attendant.password);
  const [userCpf, setUserCpf] = useState(props.attendant.cpf);
  const [userPhone, setUserPhone] = useState(props.attendant.phone);
  const [loading, setLoading] = useState(false);

  async function edit(id) {
    setLoading(true)
    await api
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
    setLoading(false)
    setShow(false);
    close();
  }

  function close() {
    setShow(false);
    setUserName("");
    setUserLogin("");
    setUserPassword("");
    setUserCpf("");
    setUserPhone("");
  }

  async function loadAttendant() {
    await api
      .get("/clerk/search/all")
      .then((response) => {
        window.alert('Atualizado com sucesso');
        props.attendantDataState(response.data)
      })
      .catch((err) => {
        window.alert('Erro ao atualizar');
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
          <Modal.Title>Editar Atendente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    placeholder={props.attendant.name}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLogin">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    placeholder={props.attendant.login}
                    onChange={(e) => setUserLogin(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    placeholder={props.attendant.password}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCpf">
                  <Form.Label>Cpf</Form.Label>
                  <Form.Control
                    placeholder={props.attendant.cpf}
                    onChange={(e) => setUserCpf(cpfMask(e.target.value))}
                    value={userCpf}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    placeholder={props.attendant.phone}
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
        <Modal.Footer> {loading ?
    <div style={{alignItems: 'center'}}>
      <Spinner  animation="border" variant="success"/>
    </div>:
         <>
          <Styled.ButtonGreen
            className="pull-right"
            type="sub"
            onClick={() => {
              edit(props.attendantEdit);
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
          </>}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditAttendant;

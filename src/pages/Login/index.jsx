import React from "react";
import "./style.css"
import banner from "../../assets/banner.svg";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const login = () => {
  return (
    <div style={{
      display: "block",
      height: "100vh",
      backgroundImage: `URL(${banner}`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    }} >

      <div className="my-bar"

      >
        <div className="my-card">
          <Form className="center">
            <Row className="align-middle">
              <Col>

                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Login</Form.Label>
                  <Form.Control placeholder=""

                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control placeholder=""
                   type="password"
                  />
                </Form.Group>

              </Col>
            </Row>
            <div className="float-right">
              <Link to="/adm">
              <Button style={{margin:"20px"}} variant="primary">Logar como adm</Button>
              </Link>
              <Link to="/atendente">
              <Button style={{margin:"20px"}} variant="success">Logar como atendente</Button>
              </Link>

            </div>
            Esta tela de login é apenas para selecionar qual view será utilizada*
          </Form>
        </div>
      </div>

    </div>
  );
}
export default login;

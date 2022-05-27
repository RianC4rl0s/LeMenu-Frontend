import React, { useState } from "react";
import "./style.css";
import banner from "../../assets/banner.svg";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
// import { signInRequest } from "../../services/auth";
const Login = () => {
  const { signIn } = useAuthContext();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [canLogin, setCanLogin] = useState(true);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // await signInRequest({login,password})
    await signIn({
      login: login,
      password: password,
    }).catch((error) => {
      setCanLogin(false);
      console.log(error);
    });
  };
  return (
    <div
      style={{
        display: "block",
        height: "100vh",
        backgroundImage: `URL(${banner}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="my-bar">
        <div className="my-card">
          <Form onSubmit={handleSubmit} className="center">
            <Row className="align-middle">
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    placeholder=""
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    placeholder=""
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="float-right">
              <Button
                onClick={handleSubmit}
                style={{ margin: "20px" }}
                variant="primary"
              >
                Logar como adm
              </Button>
              {/* <Link to="/adm">
              </Link> */}
              <Link to="/atendente">
                <Button style={{ margin: "20px" }} variant="success">
                  Logar como atendente
                </Button>
              </Link>
            </div>
            {!canLogin && (
              <>
                Não foi possível realizar o login. Login e/ou senha inválidos!
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;

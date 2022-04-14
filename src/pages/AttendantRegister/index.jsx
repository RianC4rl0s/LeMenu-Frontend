import React from "react";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import * as Styled from "./styles";

import Path from "../../components/Path/Path"
import { Card, Col, Form, Row } from "react-bootstrap";
// import { Button } from "bootstrap";
const AttendantRegister = () => {

    return (
        <>
            <div style={{ flex: 1, display: "flex" }}>
                <SideBar />
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <TopBar />
                    <Styled.Container>
                        <Path></Path>
                        {/* <Styled.BorderContainer>
                            
                        </Styled.BorderContainer> */}
                        <Card style={{ width: '96%',marginLeft:'50px',marginRight:'50px' }}>
                            <Card.Body>
                                <Card.Title>Novo Atendente</Card.Title>
                                <Form>
                                    <Row>
                                        {/* <Col>
                                            <Styled.ImgPreview>
                                                {selectedFile && <Image rounded alt="pic" src={preview} width="300" height="300" />}
                                            </Styled.ImgPreview>
                                            <Form.Group controlId="formFile" className="mb-3">
                                                <Form.Control type="file" onChange={onSelectFile} />
                                            </Form.Group>
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
                                    <div className="float-right">
                                        <Styled.ButtonGreen className="pull-right" type="sub">Salvar</Styled.ButtonGreen>
                                        <Styled.ButtonRed className="pull-right" type="sub">Cancelar</Styled.ButtonRed>

                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Styled.Container>
                </div>
            </div>
        </>
    )
}
export default AttendantRegister;
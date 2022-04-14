import React, { useEffect, useState } from "react";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import * as Styled from "./styles";

import Path from "../../components/Path/Path"
import { Card, Col, Form, Image, Row } from "react-bootstrap";
// import { Button } from "bootstrap";
const ProductRegister = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
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
                                <Card.Title>Novo Produto</Card.Title>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Styled.ImgPreview>
                                                {selectedFile && <Image rounded alt="pic" src={preview} width="300" height="300" />}
                                            </Styled.ImgPreview>
                                            <Form.Group controlId="formFile" className="mb-3">
                                                {/* <Form.Label></Form.Label> */}
                                                <Form.Control type="file" onChange={onSelectFile} />
                                            </Form.Group>
                                        </Col>
                                        <Col>

                                            <Form.Group className="mb-3" controlId="formName">
                                                <Form.Label>Nome</Form.Label>
                                                <Form.Control placeholder="" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formDescription">
                                                <Form.Label>Descrição</Form.Label>
                                                <Form.Control placeholder="" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formPrice">
                                                <Form.Label>Preço</Form.Label>
                                                <Form.Control placeholder="" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                                <Form.Label>Promoção</Form.Label>
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
export default ProductRegister;
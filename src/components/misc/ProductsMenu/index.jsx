//import { Button } from "bootstrap";
//import { Modal } from "bootstrap";
import React from "react";
import { useState } from "react";
import { Button, Card, Col, Figure, ListGroup, Pagination, Row, Stack } from "react-bootstrap";
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
// import EditProduct from "../modal/products/EditProduct";
// import * as Styled from "./styles";
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}


const PeoductsMenu = () => {
    // eslint-disable-next-line no-unused-vars
    const [productList, setProductList] = useState([
        { id: 1, piture: "../../../src/assets/berry.jpg", name: "Cumida", description: "teste3", price: "teste4" },
        { id: 2, piture: "../../../src/assets/berry.jpg", name: "teste2", description: "teste3", price: "teste4" },
        { id: 3, piture: "../../../src/assets/berry.jpg", name: "teste2", description: "teste3", price: "teste4" },
        { id: 4, piture: "../../../src/assets/berry.jpg", name: "teste2", description: "teste3", price: "teste4" },

    ]);
    const [menu, setMenu] = useState([])
    return (
        <>
            <Row>
                <Col>
                    <Card style={{ width: '90%', marginLeft: '50px', marginRight: '50px' }}>
                        <Card.Body>
                            <Card.Title>Produtos</Card.Title>
                            <ListGroup as="ul" style={{ width: '90%', marginLeft: '50px', marginRight: '50px' }}>
                                {productList.map(item => {
                                    return (

                                        <ListGroup.Item key={item.id} as="li" style={{ width: '100%', margin: '5px' }}>
                                            <Stack direction="horizontal" gap={2}>
                                                <Figure>
                                                    <Figure.Image
                                                        width={30}
                                                        height={30}
                                                        alt="Foto da Comida"
                                                        src={item.piture}
                                                    />
                                                    <Figure.Caption>
                                                        {item.name}
                                                    </Figure.Caption>
                                                </Figure>
                                                <label>{item.price}</label>

                                                <label>{item.description}</label>
                                                <Button variant="success" onClick={()=>{
                                                    setMenu((prevMenu) => [...prevMenu, item])
                                                    setProductList(productList.filter(value => value.id !== item.id))
                                                }}><FaPlus /></Button>
                                        </Stack>
                                        </ListGroup.Item>
                            )
                                })}
                        </ListGroup>

                    </Card.Body>
                </Card>

            </Col>
            <Col>
                <Card style={{ width: '90%', marginLeft: '50px', marginRight: '50px' }}>
                    <Card.Body>
                        <Card.Title>Cardápio</Card.Title>
                        <ListGroup as="ul" style={{ width: '90%', marginLeft: '50px', marginRight: '50px' }}>
                            {menu.map(item => (

                                <ListGroup.Item key={item.id} as="li" style={{ width: '100%', margin: '5px' }}>
                                    <Stack direction="horizontal" gap={2}>
                                        <Figure>
                                            <Figure.Image
                                                width={30}
                                                height={30}
                                                alt="Foto da Comida"
                                                src={item.piture}
                                            />
                                            <Figure.Caption>
                                                {item.name}
                                            </Figure.Caption>
                                        </Figure>
                                        <label>{item.price}</label>

                                        <label>{item.description}</label>
                                        <Button variant="danger"
                                        onClick={()=>{
                                            setProductList((prevProduct) => [...prevProduct, item])
                                            setMenu(menu.filter(value => value.id !== item.id))
                                        }}
                                        >
                                            <FaMinus />
                                        </Button>
                                    </Stack>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>

                </Card>
            </Col>
        </Row>
            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map(item => (

                        <tr key={item.id}>
                            <td><img src={item.piture} alt="Foto" /></td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>
         
            <Pagination>{items}</Pagination> */}

        </>

    );
}

export default PeoductsMenu;

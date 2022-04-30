//import { Button } from "bootstrap";
//import { Modal } from "bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Figure,
  ListGroup,
  Pagination,
  Row,
  Stack,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import { base64ToBlob } from "../../../utils/bloob";
import api from "../../../services/api";
// import EditProduct from "../modal/products/EditProduct";
// import * as Styled from "./styles";
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const ProductsMenu = () => {
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState([]);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    api
      .get("/product/search/all")
      .then((response) => {
        setProductList(
          response.data.filter((value) => value.isOnMenu !== true)
        );
        setMenu(response.data.filter((value) => value.isOnMenu !== false));
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const toBlob = (img) => {
    const blob = base64ToBlob({ base64: img, type: "image" });
    const url = URL.createObjectURL(blob);
    // console.log(url);
    return url;
  };
  return (
    <>
      <Row>
        <Col>
          <Card
            style={{ width: "90%", marginLeft: "50px", marginRight: "50px" }}
          >
            <Card.Body>
              <Card.Title>Cardápio</Card.Title>
              <ListGroup
                as="ul"
                style={{
                  width: "90%",
                  marginLeft: "50px",
                  marginRight: "50px",
                }}
              >
                {/* {menu.map(item => (

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
                                                onClick={() => {
                                                    setProductList((prevProduct) => [...prevProduct, item])
                                                    setMenu(menu.filter(value => value.id !== item.id))
                                                }}
                                            >
                                                <FaMinus />
                                            </Button>
                                        </Stack>
                                    </ListGroup.Item>
                                ))} */}
                {menu.map((item) => (
                  // <div key={item.id}>
                  //     {
                  //         item.isOnMenu &&
                  <ListGroup.Item
                    key={item.id}
                    as="li"
                    style={{ width: "100%", margin: "5px" }}
                  >
                    <Stack direction="horizontal" gap={2}>
                      <Figure>
                        <Figure.Image
                          width={30}
                          height={30}
                          alt="Foto da Comida"
                          src={toBlob(item.image)}
                        />
                        <Figure.Caption>{item.name}</Figure.Caption>
                      </Figure>
                      <label>{item.price}</label>

                      <label>{item.description}</label>
                    </Stack>
                  </ListGroup.Item>
                  //     }
                  // </div>
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
};

export default ProductsMenu;

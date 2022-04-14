//import { Button } from "bootstrap";
//import { Modal } from "bootstrap";
import React from "react";
import { useState } from "react";
import {
  Button,
  OverlayTrigger,
  Pagination,
  Stack,
  Table,
  Tooltip,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import EditProduct from "../modal/products/EditProduct";
import ProductDetails from "../modal/products/ProductDetails";
// import EditProduct from "../modal/products/EditProduct";
import * as Styled from "./styles";

import { FaTrashAlt } from "react-icons/fa";
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const DataTable = () => {
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState([
    {
      id: 1,
      piture: "../../../src/assets/berry.jpg",
      name: "teste2",
      description: "teste3",
      price: "teste4",
    },
    {
      id: 2,
      piture: "../../../src/assets/berry.jpg",
      name: "teste2",
      description: "teste3",
      price: "teste4",
    },
    {
      id: 3,
      piture: "../../../src/assets/berry.jpg",
      name: "teste2",
      description: "teste3",
      price: "teste4",
    },
    {
      id: 4,
      piture: "../../../src/assets/berry.jpg",
      name: "teste2",
      description: "teste3",
      price: "teste4",
    },
  ]);
  return (
    <>
      <Styled.TitleContainer>
        <Styled.Input placeholder="Buscar"></Styled.Input>
        <h3>Produtos</h3>
        <LinkContainer to="/adm/produtos-novo">
          <Styled.ButtonGreen>Novo</Styled.ButtonGreen>
        </LinkContainer>
      </Styled.TitleContainer>

      <Table striped bordered hover>
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
          {productList.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.piture} alt="Foto" />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <Stack direction="horizontal" gap={1}>
                  <EditProduct />
                  <ProductDetails />
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id={`tooltip-detalhes`}>
                        <strong>Remover</strong>.
                      </Tooltip>
                    }
                  >
                    <Button variant="danger">
                      {/* Editar */}
                      <FaTrashAlt />
                    </Button>
                  </OverlayTrigger>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <EditProduct /> */}
      <Pagination>{items}</Pagination>
    </>
  );
};

export default DataTable;

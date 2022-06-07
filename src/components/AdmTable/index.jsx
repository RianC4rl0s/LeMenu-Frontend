//import { Button } from "bootstrap";
//import { Modal } from "bootstrap";
import React from "react";
import { useEffect, useState } from "react";
import NewAdm from "../modal/Adms/NewAdm";
import api from "../../services/api";
import { Form, Pagination, Stack, Table } from "react-bootstrap";

// import EditProduct from "../modal/products/EditProduct";
import * as Styled from "./styles";

import EditAdm from "../modal/Adms/EditAdm";
import AdmDetail from "../modal/Adms/AdmDetail";
import DeleteAdm from "../modal/Adms/DeleteAdm";
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
  const [admsList, setAdmsList] = useState([]);

  useEffect(() => {
    api
      .get("/clerk/search/alladm")
      .then((response) => setAdmsList(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const [search, setSearch] = useState("");
  return (
    <>
      <Styled.TitleContainer>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Buscar</Form.Label>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder=""
          />
        </Form.Group>
        <h3>Administradores</h3>
        <NewAdm admDataState={setAdmsList} />
      </Styled.TitleContainer>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Cpf</th>
            <th>Telefone</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {admsList
            .filter((adms) => adms.login.includes(search))
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id - 1}</td>
                <td>{item.name}</td>
                <td>{item.cpf}</td>
                <td>{item.phone}</td>
                <td>
                  <Stack direction="horizontal" gap={1}>
                    <EditAdm
                      admtEdit={item.id}
                      adm={item}
                      admDataState={setAdmsList}
                    />
                    <AdmDetail admDetails={item} />
                    <DeleteAdm admDel={item.id} admDataState={setAdmsList} />
                  </Stack>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default DataTable;

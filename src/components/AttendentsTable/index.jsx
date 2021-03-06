//import { Button } from "bootstrap";
//import { Modal } from "bootstrap";
import React from "react";
import { useEffect, useState } from "react";
import NewAttendant from "../modal/Attendants/NewAttendant";
import api from "../../services/api";
import { Form, Pagination, Spinner, Stack, Table } from "react-bootstrap";

// import EditProduct from "../modal/products/EditProduct";
import * as Styled from "./styles";

import EditAttendent from "../modal/Attendants/EditAttendant";
import AttendentDetail from "../modal/Attendants/AttendantDetail";
import DeleteAttendant from "../modal/Attendants/DeleteAttendant";
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
  const [attendantsList, setAttendantsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadClerk = async () => {
    setLoading(true)
    await api
    .get("/clerk/search/all")
    .then((response) => setAttendantsList(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
    setLoading(false)
  }

  useEffect(() => {
    loadClerk();
  }, []);

  const [search, setSearch] = useState("");
  return (
    <>
      <Styled.TitleContainer>
        {/* <Styled.Input placeholder="Buscar"></Styled.Input> */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Buscar</Form.Label>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder=""
          />
        </Form.Group>
        <h3>Atendentes</h3>
        <NewAttendant attendantDataState={setAttendantsList} />
      </Styled.TitleContainer>
      {loading ?
     <div style={{alignItems: 'center'}}>
        <Spinner animation="border" variant="success"/>
      </div>:
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>Cpf</th>
            <th>Telefone</th>
            <th>Op????es</th>
          </tr>
        </thead>
        <tbody>
          {attendantsList
            .filter((attendants) => attendants.login.includes(search))
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id - 1}</td>
                <td>{item.name}</td>
                <td>{item.cpf}</td>
                <td>{item.phone}</td>
                <td>
                  <Stack direction="horizontal" gap={1}>
                    <EditAttendent
                      attendantEdit={item.id}
                      attendant={item}
                      attendantDataState={setAttendantsList}
                    />
                    <AttendentDetail attendantDetails={item} />
                    <DeleteAttendant
                      attendantDel={item.id}
                      attendantDataState={setAttendantsList}
                    />
                  </Stack>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>}
      {/* <EditProduct /> */}
      {/* <Pagination>{items}</Pagination> */}
    </>
  );
};

export default DataTable;

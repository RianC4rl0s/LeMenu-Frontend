import { Breadcrumb, Button, Form, OverlayTrigger, Stack, Table, Tooltip } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import EditTables from "../../components/modal/ModalTables/EditTable";
import NewTable from "../../components/modal/ModalTables/NewTable";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";

import * as Styled from "./styles";
import api from "../../services/api"
import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
export default function Tables() {
  const [tableList, setTableList] = useState([]);

  useEffect(() => {
    api
      .get("/table/search/all")
      .then((response) => setTableList(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }, [])

  const [search, setSearch] = useState("");
  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", margin: "20px" }}>
          <TopBar />
          <Styled.Container>
            <Breadcrumb>
              <LinkContainer to="/adm">
                <Breadcrumb.Item >Inicio</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to="/adm/mesas">
                <Breadcrumb.Item active>
                  Mesas
                </Breadcrumb.Item>
              </LinkContainer>
            </Breadcrumb>
            <Styled.BorderContainer>
              <Styled.TitleContainer>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Buscar</Form.Label>
                  <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="" />
                </Form.Group>
                <p>Mesas</p>
                <NewTable tableDataState={setTableList} />
              </Styled.TitleContainer>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Cod</th>
                    <th>Cliente</th>
                    <th>Total Pedido</th>
                    <th>Disponibilidade</th>
                    <th>Opções</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    tableList.filter(tables => tables.code.includes(search)).map(item => (
                      <tr key={item.id}>
                        <td>{item.code}</td>
                        <td>
                          {item.client == null ?
                            <>Não tem cliente</>
                            : item.client.name
                          }
                        </td>
                        <td>0,00R$</td>
                        <td>{
                          item.isOpen
                            ? <label style={{ color: "green" }}>Aberta</label>
                            : <label style={{ color: "red" }}>Fechada</label>

                        }</td>
                        <td>
                          <Stack direction="horizontal" gap={1}>
                            <EditTables item={item} tableDataState={setTableList} />
                            <OverlayTrigger
                              placement="bottom"
                              overlay={
                                <Tooltip>
                                  <strong>Detalhes</strong>
                                </Tooltip>
                              }
                            >
                              <Button variant="success">
                                <FaSearch color="white" />
                              </Button>
                            </OverlayTrigger>
                          </Stack>
                        </td>
                      </tr>
                    ))
                  }
                  {/* <tr>
                    <td>123</td>
                    <td>João</td>
                    <td>0,00R$</td>
                    <td>Não</td>
                    <td>
                      <Stack direction="horizontal" gap={1}>
                        <EditTables />
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <strong>Detalhes</strong>
                            </Tooltip>
                          }
                        >
                          <Button variant="success">
                            <FaSearch color="white" />
                          </Button>
                        </OverlayTrigger>
                      </Stack>
                    </td>
                  </tr> */}
                </tbody>
              </Table>
            </Styled.BorderContainer>
          </Styled.Container>
        </div>
      </div>
    </>
  );
}

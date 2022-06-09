import {
  Breadcrumb,
  // Button,
  Form,
  Spinner,
  // OverlayTrigger,
  Stack,
  Table,
  // Tooltip,
} from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
import { SideBarAttendant } from "../../components/SideBarAttendant";
import TopBar from "../../components/TopBar";

import * as Styled from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
export default function TablesClerk() {
  const [loading, setLoading] = useState(false);
  const [tableList, setTableList] = useState([]);

  const loadTables = async () => {
    setLoading(true);
    await api
      .get("/table/search/all")
      .then((response) => setTableList(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    setLoading(false);
  };

  useEffect(() => {
    loadTables();
  }, []);

  const [search, setSearch] = useState("");
  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <SideBarAttendant />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            margin: "20px",
          }}
        >
          <TopBar />
          <Styled.Container>
            <Breadcrumb>
              <LinkContainer to="/atendente">
                <Breadcrumb.Item>Inicio</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to="/clerk/mesas">
                <Breadcrumb.Item active>Mesas</Breadcrumb.Item>
              </LinkContainer>
            </Breadcrumb>
            <Styled.BorderContainer>
              <Styled.TitleContainer>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Buscar</Form.Label>
                  <Form.Control
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder=""
                  />
                </Form.Group>
                <h3>Mesas</h3>
              </Styled.TitleContainer>
              {loading ? (
                <div style={{ alignItems: "center" }}>
                  <Spinner animation="border" variant="success" />
                </div>
              ) : (
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
                    {tableList
                      .filter((tables) => tables.code.includes(search))
                      .map((item) => (
                        <tr key={item.id}>
                          <td>{item.code}</td>
                          <td>
                            {item.client == null ? (
                              <>Não tem cliente</>
                            ) : (
                              item.client.name
                            )}
                          </td>
                          <td>0,00R$</td>
                          <td>
                            {item.isOpen ? (
                              <label style={{ color: "green" }}>Aberta</label>
                            ) : (
                              <label style={{ color: "red" }}>Fechada</label>
                            )}
                          </td>
                          <td>
                            <Stack direction="horizontal" gap={1}>
                              {/*
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
                            </OverlayTrigger>*/}
                            </Stack>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              )}
            </Styled.BorderContainer>
          </Styled.Container>
        </div>
      </div>
    </>
  );
}

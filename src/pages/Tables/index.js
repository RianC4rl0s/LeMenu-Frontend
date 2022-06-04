import {
  Breadcrumb,
  Button,
  // Button,
  Form,
  Modal,
  // OverlayTrigger,
  Stack,
  Table,
  // Tooltip,
} from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
import EditTables from "../../components/modal/ModalTables/EditTable";
import NewTable from "../../components/modal/ModalTables/NewTable";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";

import * as Styled from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import QRCode from "react-qr-code";
export default function Tables() {
  const [tableList, setTableList] = useState([]);

  useEffect(() => {
    api
      .get("/table/search/all")
      .then((response) => setTableList(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [search, setSearch] = useState("");
  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <SideBar />
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
              <LinkContainer to="/adm">
                <Breadcrumb.Item >Inicio</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to="/adm/mesas">
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
                           <div style={{ backgroundColor: "#44DD44",textAlign:"center", borderRadius: "5px" }}>

                           <label style={{ color: "white",fontWeight:"800" }}>Mesa Livre</label>
                         </div>
                          ) : (
                            <div style={{ backgroundColor: "#dd4444",textAlign:"center", borderRadius: "5px" }}>

                              <label style={{ color: "white",fontWeight:"800" }}>Mesa Ocupada</label>
                            </div>
                          )}
                        </td>
                        <td>
                          <Stack direction="horizontal" gap={1}>
                            <EditTables
                              item={item}
                              tableDataState={setTableList}
                            />
                            {/* <OverlayTrigger
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
                            <Button variant="primary" onClick={handleShow}>
                              QR Code
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>QR Code</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <div style={{ background: 'white', padding: '16px' }}>
                                  <QRCode value={item.code} />
                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                  Fechar
                                </Button>
                                {/* <Button variant="primary" onClick={handleClose}>
                                  Save Changes
                                </Button> */}
                              </Modal.Footer>
                            </Modal>
                          </Stack>
                        </td>
                      </tr>
                    ))}
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

import { Button, OverlayTrigger, Stack, Table, Tooltip } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import EditTables from "../../components/modal/ModalTables/EditTable";
import NewTable from "../../components/modal/ModalTables/NewTable";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";

import * as Styled from "./styles";

export default function Tables() {
  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <TopBar />
          <Styled.Container>
            <Styled.BorderContainer>
              <Styled.TitleContainer>
                <Styled.Input placeholder="Buscar"></Styled.Input>
                <p>Mesas</p>
                <NewTable />
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
                  <tr>
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
                  </tr>
                </tbody>
              </Table>
            </Styled.BorderContainer>
          </Styled.Container>
        </div>
      </div>
    </>
  );
}

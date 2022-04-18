import { LinkContainer } from "react-router-bootstrap";
import * as Styled from "./styles";

import logo from "../../assets/logo.svg";
import ingredients from "../../assets/ingredients.svg";
import table from "../../assets/table.svg";
import cutlery from "../../assets/cutlery.svg";
import user from "../../assets/user.svg";
import hamburger from "../../assets/hamburgerSvg.svg";
import { OverlayTrigger, Stack, Tooltip } from "react-bootstrap";


export function SideBar() {
  return (
    <Styled.SideBar>
      <Styled.ContentTop>
        <img src={logo} alt="logo" />

        <Stack gap={3}>
          <OverlayTrigger

            placement="right"
            overlay={
              <Tooltip>
                Produtos
              </Tooltip>
            }
          >
            {/* <Button variant="secondary">Tooltip on {placement}</Button> */}
            <LinkContainer to="/adm/produtos">
              <Styled.Options src={ingredients} alt="ingredients" />
            </LinkContainer>
          </OverlayTrigger>

          <OverlayTrigger

            placement="right"
            overlay={
              <Tooltip>
                Cardápio
              </Tooltip>
            }
          >

            <LinkContainer to="/adm/cardapio">
              <Styled.Options src={cutlery} alt="cutlery" />
            </LinkContainer>
          </OverlayTrigger>

          <OverlayTrigger

            placement="right"
            overlay={
              <Tooltip>
                Mesas
              </Tooltip>
            }
          >
            <LinkContainer to="/adm/mesas">
              <Styled.Options src={table} alt="table" />
            </LinkContainer>
          </OverlayTrigger>

          <OverlayTrigger

            placement="right"
            overlay={
              <Tooltip>
                Usuários
              </Tooltip>
            }
          >
            {/* <Button variant="secondary">Tooltip on {placement}</Button> */}
            {/* <Styled.Options src={ingredients} alt="ingredients" /> */}
            <LinkContainer to="/adm/atendentes">
              <Styled.Options src={user} alt="user" />
            </LinkContainer>
          </OverlayTrigger>
        </Stack>
      </Styled.ContentTop>

      <Styled.ContentBottom>
        <img src={hamburger} alt="hamburger" />
      </Styled.ContentBottom>
    </Styled.SideBar>
  );
}

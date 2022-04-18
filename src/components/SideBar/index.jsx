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
          <LinkContainer to="/adm/produtos">
            <OverlayTrigger

              placement="right"
              overlay={
                <Tooltip>
                  Produtos
                </Tooltip>
              }
            >
              {/* <Button variant="secondary">Tooltip on {placement}</Button> */}
              <Styled.Options src={ingredients} alt="ingredients" />
            </OverlayTrigger>
          </LinkContainer>

          <LinkContainer to="/adm/cardapio">
            <OverlayTrigger

              placement="right"
              overlay={
                <Tooltip>
                  Cardápio
                </Tooltip>
              }
            >

              <Styled.Options src={cutlery} alt="cutlery" />
            </OverlayTrigger>
          </LinkContainer>

          <LinkContainer to="/adm/mesas">
            <OverlayTrigger

              placement="right"
              overlay={
                <Tooltip>
                  Mesas
                </Tooltip>
              }
            >
              <Styled.Options src={table} alt="table" />
            </OverlayTrigger>
          </LinkContainer>

          <LinkContainer to="/adm/atendentes">
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
              <Styled.Options src={user} alt="user" />
            </OverlayTrigger>
          </LinkContainer>
        </Stack>
      </Styled.ContentTop>

      <Styled.ContentBottom>
        <img src={hamburger} alt="hamburger" />
      </Styled.ContentBottom>
    </Styled.SideBar>
  );
}

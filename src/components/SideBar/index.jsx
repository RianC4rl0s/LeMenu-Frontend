import { LinkContainer } from "react-router-bootstrap";
import * as Styled from "./styles";

import logo from "../../assets/logo.svg";
import ingredients from "../../assets/ingredients.svg";
import table from "../../assets/table.svg";
import cutlery from "../../assets/cutlery.svg";
import user from "../../assets/user.svg";
import hamburger from "../../assets/hamburgerSvg.svg";

export function SideBar() {
  return (
    <Styled.SideBar>
      <Styled.ContentTop>
        <img src={logo} alt="logo" />

        <LinkContainer to="/adm/produtos">
          <Styled.Options src={ingredients} alt="ingredients" />
        </LinkContainer>

        <LinkContainer to="/adm/cardapio">
          <Styled.Options src={cutlery} alt="cutlery" />
        </LinkContainer>

        <LinkContainer to="/adm/mesas">
          <Styled.Options src={table} alt="table" />
        </LinkContainer>

        <LinkContainer to="/adm/atendentes">
          <Styled.Options src={user} alt="user" />
        </LinkContainer>
      </Styled.ContentTop>

      <Styled.ContentBottom>
        <img src={hamburger} alt="hamburger" />
      </Styled.ContentBottom>
    </Styled.SideBar>
  );
}

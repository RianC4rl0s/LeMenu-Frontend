// import { LinkContainer } from "react-router-bootstrap";
import * as Styled from "./styles";
import "./style.css";
import logo from "../../assets/logo.svg";
// import ingredients from "../../assets/ingredients.svg";
// import table from "../../assets/table.svg";
// import cutlery from "../../assets/cutlery.svg";
// import user from "../../assets/user.svg";
import hamburger from "../../assets/hamburgerSvg.svg";
import { /*Button,*/ OverlayTrigger, Stack, Tooltip } from "react-bootstrap";
import { FaAppleAlt, FaUtensils, FaCube,FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";

export function SideBarAttendant() {
  return (
    <>
      <div style={{ width: "60px", height: "100vh" }}></div>
      <Styled.SideBar>
        <Styled.ContentTop>
          <div style={{ margin: "5px 0px 2px 6px" }}>
            <Link to="/atendente">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <hr />
          <div style={{ marginTop: "7px" }}>
            <Stack>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Produtos</Tooltip>}
              >
                {/* <Button variant="secondary">Tooltip on {placement}</Button> */}
                {/* <LinkContainer > */}
                {/* <Styled.Options src={ingredients} alt="ingredients" /> */}
                {/* <Button variant="outline-primary">
                  <FaAppleAlt></FaAppleAlt>
                  </Button>
                  
                </LinkContainer> */}
                <Link to="/clerk/produtos">
                  <button className="sideBarBtn">
                    <FaAppleAlt></FaAppleAlt>
                  </button>
                </Link>
              </OverlayTrigger>

              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Cardápio</Tooltip>}
              >
                {/* 
              <LinkContainer to="/adm/cardapio">
                <Button variant="outline-primary">
                  <FaUtensils></FaUtensils>
                </Button>
              </LinkContainer> */}
                <Link to="/clerk/cardapio">
                  <button className="sideBarBtn">
                    <FaUtensils></FaUtensils>
                  </button>
                </Link>
              </OverlayTrigger>
              <OverlayTrigger

                placement="right"
                overlay={
                  <Tooltip>
                    Pedidos
                  </Tooltip>
                }
              >
               
                <Link to="/clerk/pedidos">
                  <button className="sideBarBtn">
                    <FaListUl></FaListUl>
                  </button>
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Mesas</Tooltip>}
              >
                {/* <LinkContainer to="/adm/mesas">
                <Button variant="outline-primary">
                <FaCube></FaCube>
                </Button>
              </LinkContainer> */}
                <Link to="/clerk/mesas">
                  <button className="sideBarBtn">
                    <FaCube></FaCube>
                  </button>
                </Link>
              </OverlayTrigger>
            </Stack>
          </div>
        </Styled.ContentTop>

        <Link to="/">

          <Styled.ContentBottom onClick={()=>localStorage.removeItem("lemenu_token")}>
            <img src={hamburger} alt="hamburger" />
          </Styled.ContentBottom>
        </Link>
      </Styled.SideBar>
    </>
  );
}

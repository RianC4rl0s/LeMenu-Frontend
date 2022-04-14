import React from "react";
import { SideBar } from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import * as Styled from "./styles";
import ProductsTable from "../../components/ProductsTable";
import Path from "../../components/Path/Path";
import { Breadcrumb } from "react-bootstrap";
const Product = () => {
  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <TopBar />
          <Styled.Container>
            {/* <Path></Path> */}
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <Styled.BorderContainer>
              <ProductsTable />
            </Styled.BorderContainer>
          </Styled.Container>
        </div>
      </div>
    </>
  );
};
export default Product;

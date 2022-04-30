import styled from "styled-components";

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SideBar = styled(ContainerRow)`
  width: 60px;
  height: 100vh;
  box-shadow: 2px 2px 6px #7d7d7dac;
  /* padding: 6px; */
  background-color: var(--gray);
  justify-content: space-between;
  position: fixed;
`;

export const ContentTop = styled(ContainerRow)`
  width:60px;
`;

export const ContentBottom = styled(ContainerRow)`
  width: 50px;
  margin-left: 6px;
`;

export const Options = styled.img`
  border: 2px solid #dfdfdf;
  border-radius: 6px;
  padding: 2px;
  margin: 2px;
  &:hover {
    background-color: #dbdbdb;
    border: 2px solid #9fff7f;
  }
  &:active {
    background-color: #ffffff;
    border: 2px solid #60f72d;
  }
`;

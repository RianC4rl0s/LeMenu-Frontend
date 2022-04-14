import styled from "styled-components";

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SideBar = styled(ContainerRow)`
  width: 50px;
  height: 100vh;
  padding: 6px;
  background-color: var(--gray);
  justify-content: space-between;
`;

export const ContentTop = styled(ContainerRow)`
  width: 40px;
`;

export const ContentBottom = styled(ContainerRow)`
  width: 40px;
`;

export const Options = styled.img`
  border: 2px solid #dfdfdf;
  border-radius: 6px;
  padding: 2px;
  margin: 2px;
`;

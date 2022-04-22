import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const BorderContainer = styled.div`
  border: 1px solid #f2f2f2;
  border-radius: 6px;
  margin: 20px;
  height: min-content;
  width: 90vw;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 90vw;
  padding: 0 16px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  border: 1px solid #f2f2f2;
  border-radius: 6px;
  padding: 6px;
`;

export const Button = styled.button`
  background: green;
  color: white;
  border: 2px solid green;
  border-radius: 6px;
  padding: 10px 4px 10px 4px;
`;

export const Image = styled.img`
  padding: 2px;
  margin: 2px;
`;
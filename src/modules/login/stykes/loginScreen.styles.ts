import styled from "styled-components";

export const ContainerLoginScreen = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;

export const Background = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const LogoImage = styled.img`
  border-radius: 30%;
  align-self: center;
  width: 202px;
  height: 143px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d8d8d8;
  width: 100%;
  height: 100vh;
  max-width: 646px;
  padding: 20px;
`;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

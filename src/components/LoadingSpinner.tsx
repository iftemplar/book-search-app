import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 20px auto;
  border: 4px solid #ccc;
  border-top: 4px solid #000;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  right: 100px;

  @media screen and (max-width: 480px) {
    right: calc(50% - 16px);
  }
`;

export const LoadingSpinner = () => {
  return <Spinner />;
};

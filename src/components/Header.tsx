import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 72px;
  padding: 0 24px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

export const Header = ({ children }: { children: React.ReactNode }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

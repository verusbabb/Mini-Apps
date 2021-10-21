import React from "react";
import styled from "styled-components";

const Header = () => {
  return <PageTitle>Fun with Algorithms</PageTitle>;
};

const PageTitle = styled.div`
  font-size: 5vw;
  color: #ffffff;
  font-weight: bold;
  background-color: #20b380;
  text-align: center;
  padding: 30px;
`;

export default Header;

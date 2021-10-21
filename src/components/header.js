import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <PageTitle>
        <Title>Mini Apps</Title>
        <Info>(Bite-Size Code Block Demonstrations)</Info>
      </PageTitle>
    </div>
  );
};

const PageTitle = styled.div`
  color: #ffffff;
  font-weight: bold;
  background-color: #20b380;
  text-align: center;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 4vw;
  text-align: center;
`;

const Info = styled.p`
  font-size: 2vw;
`;

export default Header;

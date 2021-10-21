import React, { useState } from "react";
import styled from "styled-components";

export default function ReverseMe() {
  const [reverseMe, setReverseMe] = useState();

  //Using the build in reverse method
  const reverse = (e) => {
    setReverseMe(e.target.value.split("").reverse().join(""));
    console.log(reverseMe);
  };

  //using brute force
  const reverseBruteForce = (e) => {
    let reversed = "";
    for (let character of e.target.value) {
      reversed = character + reversed;
    }
  };

  //using spread
  const reverseWithSpread = (e) => {
    const spreadString = [...e.target.value];
    console.log(spreadString);

    setReverseMe(spreadString.reverse().join(""));
  };

  const resetState = () => {
    setReverseMe();
    document.getElementById("inputForm").reset();
  };

  return (
    <Container>
      <Title>WRITE BACKWARDS</Title>
      <Instruct>Type a phrase and I will reverse it for you...</Instruct>

      <form id="inputForm">
        <Input type="text" name="phrase" onChange={reverseWithSpread} />
      </form>

      <Instruct>{reverseMe}</Instruct>
      <Button onClick={resetState}>Reset</Button>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #448aff;
  margin-top: 5vw;
  margin-right: 10vw;
  margin-left: 10vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2vw;
  border-radius: 1vw;

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 3vw;
  text-align: center;
`;

const Instruct = styled.p`
  font-size: 2.5vw;
`;

const Input = styled.input`
  width: 30vw;
  padding: 0.5vw;
  align-self: center;
`;

const Button = styled.button`
  display: flex;
  text-align: center;
  align-self: center;
  font-size: 1.75vw;
  justify-content: center;
  margin: 10px;
  width: 15vw;
  border-radius: 0.5vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 600px) {
    width: 20vw;
    margin: 1vw;
  }
`;

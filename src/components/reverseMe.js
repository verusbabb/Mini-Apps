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
      <Title>Reverse Me</Title>
      <Instruct>Type a phrase and I will reverse it for you...</Instruct>

      <form id="inputForm">
        <Input type="text" name="phrase" onChange={reverseWithSpread} />
      </form>

      <Result>{reverseMe}</Result>
      <Reset onClick={resetState}>Reset</Reset>
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
  width: auto;

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

const Result = styled.h2`
  font-size: 2.5vw;
  color: red;
`;

const Input = styled.input`
  width: 30vw;

  align-self: center;
`;

const Reset = styled.button`
  font-size: 1.75vw;
  margin: 3vw;
  width: 15vw;
  align-self: center;
  border-radius: 0.5vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
`;

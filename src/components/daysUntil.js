import React, { useState } from "react";
import styled from "styled-components";

const DaysUntil = () => {
  const [days, setDays] = useState();

  let today = new Date();

  const dayDif = (e) => {
    e.preventDefault();
    let futureDate = new Date(e.target.elements.name.value);
    console.log(today);
    console.log(futureDate);
    console.log(
      Math.ceil(Math.abs(futureDate.getTime() - today.getTime()) / 86400000)
    );
    setDays(
      Math.ceil(Math.abs(futureDate.getTime() - today.getTime()) / 86400000)
    );
  };

  return (
    <Container>
      <Title>How many days until...</Title>
      <form onSubmit={dayDif}>
        <input type="text" name="name" placeholder="xxxx-xx-xx" />
        <button type="submit">enter</button>
      </form>
      <h2>Answer: {days}</h2>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 5vw;
  margin-right: 10vw;
  margin-left: 10vw;
  background-color: #448aff;
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

const Input = styled.input`
  width: 30vw;

  align-self: center;
`;

export default DaysUntil;

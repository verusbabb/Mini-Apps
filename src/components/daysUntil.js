import React, { useState } from "react";
import styled from "styled-components";

const DaysUntil = () => {
  const [days, setDays] = useState();

  let today = new Date();

  const dayDif = (e) => {
    e.preventDefault();
    let futureDate = new Date(e.target.value);
    console.log(today);
    console.log(futureDate);
    console.log(
      Math.ceil(Math.abs(futureDate.getTime() - today.getTime()) / 86400000)
    );
    setDays(
      Math.ceil(Math.abs(futureDate.getTime() - today.getTime()) / 86400000)
    );
  };

  const customDayDif = (e) => {
    e.preventDefault();
    let futureDate = new Date(e.target.name.value);
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
      <Title>CALENDAR COUNTDOWN</Title>
      <form onSubmit={customDayDif}>
        <Info>
          Enter a specific date and I'll tell you how many days away it is...
        </Info>
        <EnterInput
          type="text"
          name="name"
          placeholder="yyyy-mm-dd"
        ></EnterInput>
        <EnterButton type="submit">enter</EnterButton>
      </form>

      <Info>Or choose a specific holiday below...</Info>
      <Buttons>
        <Button onClick={dayDif} value="2021-12-25">
          Christmas
        </Button>
        <Button onClick={dayDif} value="2022-02-14">
          Valentine's Day
        </Button>
        <Button onClick={dayDif} value="2022-05-30">
          Memorial Day
        </Button>
        <Button onClick={dayDif} value="2022-07-04">
          4th of July
        </Button>
      </Buttons>
      {days && <Info>That is {days} days away!</Info>}
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

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 3vw;
  text-align: center;
`;

const EnterInput = styled.input`
  width: 10%;
  align-self: center;
  text-align: center;
  padding: 0.5vw;

  @media only screen and (max-width: 600px) {
    width: 30%;
  }
`;

const EnterButton = styled.button`
  align-self: center;
  padding: 0.5vw;

  @media only screen and (max-width: 600px) {
    width: 30%;
  }
`;

const Info = styled.p`
  font-size: 2.5vw;
`;

const Buttons = styled.section`
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  width: 150vw;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 20vw;
  }
`;

const Button = styled.button`
  font-size: 1.75vw;
  margin: 10px;
  width: 15vw;
  border-radius: 0.5vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 600px) {
    width: 20vw;
    margin: 1vw;
  }
`;

export default DaysUntil;

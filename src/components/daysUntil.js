import React, { useState } from "react";
import styled from "styled-components";

const DaysUntil = () => {
  const [days, setDays] = useState();

  let today = new Date();
  let Christmas = "2021-12-25";
  let New_Years_Day = "2022-01-01";
  let MLK = "2022-01-17";
  let Labor_Day = "2022-09-05";
  let Independence = "2022-07-04";
  let Thanksgiving = "2022-11-24";
  let Memorial = "2022-05-30";
  let Valentines = "2022-02-14";
  const Presidents = "2022-02-21";
  const Easter = "2022-04-17";
  const GroundHog = "2022-02-02";

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
      <Title>How many days until...</Title>
      <form onSubmit={customDayDif}>
        <Label>Enter a specific date..</Label>
        <input type="text" name="name" placeholder="yyyy-mm-dd" />
        <button type="submit">enter</button>
      </form>

      <Label>Or choose a specific holiday below...</Label>
      <Buttons>
        <AnswerButton onClick={dayDif} value="2021-12-25">
          Christmas
        </AnswerButton>
        <AnswerButton onClick={dayDif} value="2022-02-14">
          Valentine's Day
        </AnswerButton>
        <AnswerButton onClick={dayDif} value="2022-05-30">
          Memorial Day
        </AnswerButton>
        <AnswerButton onClick={dayDif} value="2022-07-04">
          4th of July
        </AnswerButton>
      </Buttons>
      {days && <h2>That is {days} days away!</h2>}
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

const Label = styled.div`
  font-size: 2vw;
  margin-bottom: 10px;
  margin-top: 25px;
`;

const Title = styled.h1`
  font-size: 3vw;
  text-align: center;
`;

const Input = styled.input`
  width: 30vw;

  align-self: center;
`;

const AnswerButton = styled.button`
  font-size: 1.25vw;
  margin: 10px;
  width: 120px;
  border-radius: 0.5vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 600px) {
    width: 10vw;
  }
`;

const Buttons = styled.section`
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  width: 75vw;
`;

export default DaysUntil;

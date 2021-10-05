import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function FizzBuzz() {
  const [toggle, setToggle] = useState(false);
  const [randomNum, setRandomNum] = useState();
  const [correct, setCorrect] = useState(false);
  const [wins, setWins] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [count, setCount] = useState(-1);
  // const [seconds, setSeconds] = useState(60);

  // useEffect(() => {
  //   if (seconds > 0) {
  //     setTimeout(() => setSeconds(seconds - 1), 1000);
  //   } else {
  //     setSeconds("Times Up!");
  //   }
  // }, []);

  const fizzBuzz = () => {
    if (randomNum % 15 === 0) {
      setCorrect(true);
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
  };
  const fizz = () => {
    if (randomNum % 3 === 0) {
      setCorrect(true);
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
  };
  const buzz = () => {
    if (randomNum % 5 === 0) {
      setCorrect(true);
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
  };
  const neither = () => {
    if (!(randomNum % 5 === 0) && !(randomNum % 3 === 0)) {
      setCorrect(true);
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
  };

  const clickStart = () => {
    setToggle(true);
    generateNumber();
  };

  const generateNumber = () => {
    let number = Math.floor(Math.random() * 100);
    console.log(number);
    setRandomNum(number);
    setCorrect(false);
    setShowScore(true);
    setCount(count + 1);
  };

  return (
    <Container>
      <Title>SIMPLE MATH</Title>
      <h2>
        You win if you correctly guess whether the displayed number is evenly
        divisible by 3, 5, or both 3 AND 5. <br />
        <br />
        See how many correct guesses you can make in 10 tries.
      </h2>

      {randomNum && <h2>The number is: {randomNum}</h2>}
      <Buttons>
        {!toggle && <Button onClick={clickStart}>Start</Button>}
        {toggle && <Button onClick={fizzBuzz}>Divisible by 3 AND 5?</Button>}
        {toggle && <Button onClick={fizz}>Divisible ONLY by 3?</Button>}
        {toggle && <Button onClick={buzz}>Divisible ONLY by 5?</Button>}

        {toggle && <Button onClick={neither}>NOT Divisible by 3 OR 5</Button>}
      </Buttons>
      {showScore && (
        <h2>
          Score: {wins} for {count}.
        </h2>
      )}
    </Container>
  );
}

const Container = styled.section`
  display: inline-block;
  text-align: center;
  margin-right: 10em;
  margin-left: 10em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2em;
  border-radius: 1em;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1em;
  border-color: #e7e7e7;
  margin: 10px;
  width: 200px;
`;

const Buttons = styled.section`
  display: inline-block;
  text-align: center;
  width: 500px;
`;

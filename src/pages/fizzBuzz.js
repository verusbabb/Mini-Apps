import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function FizzBuzz() {
  const [toggleGo, setToggleGo] = useState(false);
  const [toggleStart, setToggleStart] = useState(true);
  const [toggleIntro, setToggleIntro] = useState(true);
  const [toggleTime, setToggleTime] = useState(false);
  const [toggleTimeOut, setToggleTimeOut] = useState(false);
  const [toggleButtons, setToggleButtons] = useState(false);
  const [toggleScore, setToggleScore] = useState(false);
  const [toggleRestart, setToggleRestart] = useState(false);
  const [randomNum, setRandomNum] = useState();
  const [wins, setWins] = useState(0);
  const [count, setCount] = useState(-1);
  const [time, setTime] = useState();

  let timer;

  function startTimer(seconds) {
    timer = seconds;
    const interval = setInterval(() => {
      timer = timer - 1;
      setTime(timer);
      console.log(time);

      if (timer < 1) {
        clearInterval(interval);
        console.log("Ding!");
        setToggleTimeOut(true);
        setToggleRestart(true);
      }
    }, 1000);
  }

  // useEffect(() => {
  //   if (seconds > 0) {
  //     setTimeout(() => setSeconds(seconds - 1), 1000);
  //   } else {
  //     setSeconds();
  //     setToggleTimeOut(true);
  //     setTimeout(() => {
  //       setToggleButtons(false);
  //       setToggleTimeOut(false);
  //       setToggleTime(false);
  //       setToggleRestart(true);
  //       setToggleScore(false);
  //       setToggleStart(false);
  //     }, 3000);
  //   }
  // }, [seconds]);

  const fizzBuzz = () => {
    if (randomNum % 15 === 0) {
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
  };
  const fizz = () => {
    if (randomNum % 3 === 0) {
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
  };
  const buzz = () => {
    if (randomNum % 5 === 0) {
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
  };
  const neither = () => {
    if (!(randomNum % 5 === 0) && !(randomNum % 3 === 0)) {
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
  };

  const clickStart = () => {
    generateNumber();
    startTimer(10);
    setToggleIntro(false);
    setToggleTimeOut(false);
    setToggleTime(true);
    setToggleButtons(true);
    setToggleScore(true);
    setToggleStart(false);
    setToggleGo(true);
  };

  const clickStartAgain = () => {
    generateNumber();
    startTimer(10);
    setToggleStart(false);
    setToggleTimeOut(false);
    setToggleButtons(true);
    setToggleTime(true);
    setToggleScore(true);
    setToggleRestart(false);
  };

  const generateNumber = () => {
    let number = Math.floor(Math.random() * 100);
    console.log(number);
    setRandomNum(number);
    setCount(count + 1);
  };

  return (
    <Container>
      <Title>IT'S JUST SIMPLE MATH...</Title>
      {toggleIntro && (
        <h2>
          You win if you correctly guess whether the displayed number is evenly
          divisible by 3, 5, or both 3 AND 5. <br />
          <br />
          See how many correct guesses you can make in 10 tries.
        </h2>
      )}
      {toggleTime && !toggleTimeOut && <h2>Time Remaining: {time}</h2>}
      {toggleTimeOut && <h2>Time's up!</h2>}

      {toggleTime && !toggleTimeOut && <h2>The number is: {randomNum}</h2>}
      <Buttons>
        {toggleStart && <Button onClick={clickStart}>Play</Button>}
        {toggleRestart && <Button onClick={clickStartAgain}>Play Again</Button>}
        {toggleButtons && (
          <Button onClick={fizzBuzz}>Divisible by 3 AND 5?</Button>
        )}
        {toggleButtons && <Button onClick={fizz}>Divisible ONLY by 3?</Button>}
        {toggleButtons && <Button onClick={buzz}>Divisible ONLY by 5?</Button>}
        {toggleButtons && (
          <Button onClick={neither}>NOT Divisible by 3 OR 5</Button>
        )}
      </Buttons>
      {toggleScore && (
        <h2>
          Score: {wins} for {count}.
        </h2>
      )}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 5em;
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
  width: 300px;
`;

const Buttons = styled.section`
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  width: 800px;
`;

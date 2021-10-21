import React, { useState } from "react";
import styled from "styled-components";

export default function FizzBuzz() {
  const [instruct, setInstruct] = useState(true);
  const [showStart, setShowStart] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(false);
  const [noTimeLeft, setNoTimeLeft] = useState(false);
  const [replayButton, setReplayButton] = useState(false);
  const [randomNum, setRandomNum] = useState();
  const [wins, setWins] = useState(0);
  const [count, setCount] = useState(0);
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
        setPlaying(false);
        setReplayButton(true);
        setNoTimeLeft(true);
        setTimeLeft(false);
      }
    }, 1000);
  }

  const fizzBuzz = () => {
    if (randomNum % 15 === 0) {
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
    setCount(count + 1);
  };
  const fizz = () => {
    if (randomNum % 3 === 0) {
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
    setCount(count + 1);
  };
  const buzz = () => {
    if (randomNum % 5 === 0) {
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
    setCount(count + 1);
  };
  const neither = () => {
    if (!(randomNum % 5 === 0) && !(randomNum % 3 === 0)) {
      setWins(wins + 1);
      generateNumber();
    } else generateNumber();
    setCount(count + 1);
  };

  const clickStart = () => {
    generateNumber();
    startTimer(20);
    setInstruct(false);
    setShowStart(false);
    setPlaying(true);
    setTimeLeft(true);
  };

  const clickStartAgain = () => {
    setPlaying(true);
    setTimeLeft(true);
    setWins(0);
    setNoTimeLeft(false);
    setReplayButton(false);
    setCount(0);
    generateNumber();
    startTimer(20);
  };

  const generateNumber = () => {
    let number = Math.floor(Math.random() * 100);
    console.log(number);
    setRandomNum(number);
  };

  return (
    <div>
      <Container>
        <Title>MATH TEST</Title>

        {instruct && (
          <Info>
            Test your math skills.
            <br />
            <br />
            Is a given integer evenly divisible by 3, 5, or 3 AND 5?
          </Info>
        )}

        {showStart && (
          <Buttons>
            <Button onClick={clickStart}>Play</Button>
          </Buttons>
        )}

        <div>
          {timeLeft && <Timer>Time Remaining: {time}</Timer>}
          {noTimeLeft && <InfoRed>Game Over!</InfoRed>}
        </div>

        <div>
          {noTimeLeft && (
            <Info>
              You won {wins} out of {count} tries.
            </Info>
          )}
        </div>

        {playing && <Info>Is {randomNum} evenly divisible by...</Info>}

        {replayButton && (
          <Buttons>
            <Button onClick={clickStartAgain}>Play Again</Button>
          </Buttons>
        )}

        {playing && (
          <Buttons>
            <Button onClick={fizzBuzz}>3 and 5?</Button>
            <Button onClick={fizz}>Only 3?</Button>
            <Button onClick={buzz}>Only 5?</Button>
            <Button onClick={neither}>Neither?</Button>
          </Buttons>
        )}

        {playing && (
          <Info>
            Score: {wins} for {count}.
          </Info>
        )}
      </Container>
    </div>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
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
  ${"" /* text-align: center; */}
`;

const Timer = styled.p`
  font-size: 3vw;
  color: red;
  animation: blinker 1s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

const Info = styled.p`
  font-size: 2.5vw;
`;
const InfoRed = styled.p`
  font-size: 3vw;
  color: red;
`;

const Buttons = styled.section`
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  width: 75vw;
`;

const Button = styled.button`
  font-size: 1.75vw;
  margin: 10px;
  width: 20vw;
  border-radius: 0.5vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 600px) {
    width: 20vw;
  }
`;

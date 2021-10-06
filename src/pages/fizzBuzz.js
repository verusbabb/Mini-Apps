import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function FizzBuzz() {
  const [instruct, setInstruct] = useState(true);
  const [showStart, setShowStart] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(false);
  const [noTimeLeft, setNoTimeLeft] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [playButton, setPlayButton] = useState(false);
  const [replayButton, setReplayButton] = useState(false);
  const [answerButtons, setAnswerButtons] = useState(false);
  const [score, setScore] = useState(false);
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

        console.log("Ding!");
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
    startTimer(10);
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
    startTimer(10);
  };

  const generateNumber = () => {
    let number = Math.floor(Math.random() * 100);
    console.log(number);
    setRandomNum(number);
    // setCount(count + 1);
  };

  return (
    <Container>
      <Title>IT'S JUST SIMPLE MATH...</Title>

      {instruct && (
        <Instruct>
          You win if you correctly guess whether the displayed number is evenly
          divisible by 3, 5, or both 3 AND 5. <br />
          <br />
          See how many correct guesses you can make in 10 tries.
        </Instruct>
      )}

      {showStart && (
        <Buttons>
          <Start onClick={clickStart}>Play</Start>
        </Buttons>
      )}

      <Time>
        {timeLeft && <h3>Time Remaining: {time}</h3>}
        {noTimeLeft && <h2>GameOver!</h2>}
        {noTimeLeft && (
          <Result>
            You won {wins} out of {count} tries.
          </Result>
        )}
      </Time>

      {playing && <Question>Is {randomNum} evenly divisible by...</Question>}

      {replayButton && (
        <Buttons>
          <Start onClick={clickStartAgain}>Play Again</Start>
        </Buttons>
      )}

      {playing && (
        <Buttons>
          <AnswerButton onClick={fizzBuzz}>3 and 5?</AnswerButton>
          <AnswerButton onClick={fizz}>Only 3?</AnswerButton>
          <AnswerButton onClick={buzz}>Only 5?</AnswerButton>
          <AnswerButton onClick={neither}>Neither</AnswerButton>
        </Buttons>
      )}

      {playing && (
        <Score>
          Score: {wins} for {count}.
        </Score>
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

const Instruct = styled.p`
  font-size: 1.5em;
`;

const Time = styled.h2``;

const Question = styled.h1`
  font-size: 2em;
  color: red;
`;

const Result = styled.h1`
  font-size: 1.5em;
  color: red;
`;

const Score = styled.h2``;

const AnswerButton = styled.button`
  font-size: 1.25em;
  margin: 10px;
  width: 100px;
  border-radius: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
`;

// const Button = styled.button`
//   font-size: 1em;
//   border-color: #e7e7e7;
//   margin: 10px;
//   width: 300px;
// `;

const Start = styled.button`
  font-size: 1.75em;
  margin: 10px;
  width: 200px;
  border-radius: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
`;

const Buttons = styled.section`
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  width: 800px;
`;

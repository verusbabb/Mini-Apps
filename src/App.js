import React from "react";
import FizzBuzz from "./components/fizzBuzz";
import ReverseMe from "./components/reverseMe";
import DaysUntil from "./components/daysUntil";
import Header from "./components/header";
import Weather from "./components/currentWeather";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header />
      <FizzBuzz />
      <DaysUntil />
      <ReverseMe />
      <Weather />
    </div>
  );
}

export default App;

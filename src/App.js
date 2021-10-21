import React from "react";
import FizzBuzz from "./components/fizzBuzz";
import ReverseMe from "./components/reverseMe";
import DaysUntil from "./components/daysUntil";
import Header from "./components/header";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header />
      <FizzBuzz />
      <DaysUntil />
      <ReverseMe />
    </div>
  );
}

export default App;

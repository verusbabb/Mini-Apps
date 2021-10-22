import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Forecast() {
  const [forecast, setForecast] = useState({});
  const [city, setCity] = useState("");

  const apiKey = "f21ee75183114c7c096d92749641d1f4";

  const getForecast = async (e) => {
    e.preventDefault();
    const loc = e.target.elements.loc.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&appid=${apiKey}`;
    axios.get(url).then(function (response) {
      //   console.log(response);
      //   console.log(response.data.main.temp);
      //   console.log(response.data.weather[0].description);
      //   console.log(response.data.weather[0].icon);
      setCity(loc);
      setForecast({
        temp: response.data.main.temp,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        iconUrl:
          "http://openweathermap.org/img/w/" +
          response.data.weather[0].icon +
          ".png",
      });
    });
    document.getElementById("cityInput").reset();
    document.getElementById("cityInput").focus();
  };

  console.log(city + ": " + forecast.temp);

  return (
    <div>
      <Container>
        <Title>WEATHER</Title>
        <form id="cityInput" onSubmit={getForecast}>
          <Info>Enter a city name and I'll get the forecast...</Info>
          <EnterInput
            type="text"
            name="loc"
            placeholder="City name"
          ></EnterInput>
          <EnterButton type="submit">enter</EnterButton>
        </form>
        {city && (
          <Output>
            <City>{city}</City>
            <Icon src={forecast.iconUrl}></Icon>
            <Temp>Temp: {forecast.temp}°</Temp>
          </Output>
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

const Temp = styled.p`
  font-size: 1.5vw;
  font-weight: bold;
  margin-top: -0.5vw;
`;

const Output = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3vw;
  text-align: center;
`;

const EnterInput = styled.input`
  width: 10%;
  align-self: center;
  padding: 0.5vw;

  @media only screen and (max-width: 600px) {
    width: 30%;
  }
`;

const City = styled.p`
  font-size: 2.5vw;
  margin-bottom: -0.5vw;
`;

const Icon = styled.img`
  width: 10vw;
  height: 10vw;
  align-self: center;
  margin: -1vw;
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

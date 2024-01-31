import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import MainWeatherBoard from "./components/MainWeatherBoard";
import { Typography } from "@mui/material";

function App() {
  const [weatherData, setWeatherData] = useState();

  const getWeather = (city, unit) => {
    const units = unit;
    const cityName = city;
    const apiKey = "783543f64c5acd04eb7fe0ec61215cd7";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=${units}&q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((weatherData) => {
        setWeatherData(weatherData);
      })
      .catch((error) => {
        console.error("Error making API request:", error.message);
        setWeatherData(null);
      });
  };

  return (
    <div className="App">
      <Typography variant="h1">Weather App</Typography>
      <InputBox buttonText="Search" buttonHandler={getWeather} />
      {weatherData && <MainWeatherBoard data={weatherData} />}
    </div>
  );
}

export default App;

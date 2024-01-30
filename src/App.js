import { useState, useEffect } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import MainWeatherBoard from "./components/MainWeatherBoard";

function App() {
  const [getCity, setGetCity] = useState("dubai");
  const [weatherData, setWeatherData] = useState({});

  const getWeather = (city) => {
    setGetCity(city);
  };

  useEffect(() => {
    const cityName = getCity;
    const apiKey = "783543f64c5acd04eb7fe0ec61215cd7";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((weatherData) => {
        console.log("weatherData: " + JSON.stringify(weatherData));
        setWeatherData(weatherData);
      })
      .catch((error) => {
        console.error("Error making API request:", error.message);
      });
  }, [getCity]);


  return (
    <div className="App">
      <h1>Weather App</h1>
      <InputBox getWeather={getWeather} />
      {weatherData && <MainWeatherBoard data={weatherData} />}
    </div>
  );
}

export default App;

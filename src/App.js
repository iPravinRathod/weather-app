import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("dubai");
  const [getCity, setGetCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const cityName = city;
  const apiKey = "783543f64c5acd04eb7fe0ec61215cd7";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

  const getWeather = () => {
    setGetCity(city);
  };

  useEffect(() => {
    city &&
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

  function MainWeatherBoard({ data }) {
    return (
      <>
        <h1>{data.cod}</h1>
        <h1>{data.city.name}</h1>
        {/* <p>Temperature: {data.list[0].temp}</p> */}
      </>
    );
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        placeholder="Search City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => getWeather()}>Search</button>
      {weatherData && <MainWeatherBoard data={weatherData} />}
    </div>
  );
}

export default App;

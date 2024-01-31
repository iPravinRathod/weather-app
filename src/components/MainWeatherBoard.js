import React from "react";
import { Typography } from "@mui/material";

const MainWeatherBoard = ({ data }) => {
  console.log("data: " + JSON.stringify(data.list[0]));
  return (
    <>
      <Typography variant="body1">Today</Typography>
      <Typography variant="h2">{data.city.name}</Typography>
      <Typography color="primary" variant="subtitle1">
        Temperature: {data.list[0].main.temp}
      </Typography>
      <Typography color="primary" variant="subtitle1">
        Feels like: {data.list[0].main.feels_like}
      </Typography>
      <Typography color="primary" variant="subtitle1">
        {data.list[0].weather[0].description}
      </Typography>
    </>
  );
};

export default MainWeatherBoard;

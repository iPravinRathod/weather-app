import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const InputBox = ({ buttonText, buttonHandler }) => {
  const [city, setCity] = useState("dubai");
  const [unit, setUnit] = useState("metric");

  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <Box
      sx={{
        height: "10vh",
        margin: "5px",
      }}
    >
      <Grid container spacing={0}>
        <Grid item lg={6}>
          <TextField
            size="small"
            fullWidth
            label="Search City"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </Grid>
        <Grid item lg={4}>
          <FormControl>
            <RadioGroup row aria-labelledby="units" name="row-radio-buttons-group" value={unit} onChange={handleChange}>
              <FormControlLabel value="metric" control={<Radio />} label="metric" />
              <FormControlLabel value="imperial" control={<Radio />} label="imperial" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item lg={2}>
          <Button variant="contained" onClick={() => buttonHandler(city, unit)}>
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputBox;

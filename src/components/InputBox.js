import { useState } from "react";

const InputBox = ({ getWeather }) => {
    const [city, setCity] = useState("dubai");

    return (
        <>
            <input
                placeholder="Search City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={() => getWeather(city)}>Search</button>
        </>
    )
}

export default InputBox
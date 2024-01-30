import React from 'react'

const MainWeatherBoard = ({ data }) => {
    return (
        <>
            <h1>{data.message}</h1>
            <h1>{data.cnt}</h1>
            <h1>{data.cod}</h1>
            <h1>{data.city.name}</h1>
            {/* <h1>{data.city.name}</h1>
            <p>Temperature: {data.list[0].temp}</p> */}
        </>
    );
}

export default MainWeatherBoard
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const Card = ({ data }) => {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="d-flex flex-column align-items-center gap-2 mt-3">
      <div>
        <Clock value={value} />
      </div>
      <h2>
        {data?.name}, {data?.sys?.country}
      </h2>
      <h1>
        <img
          src={`https://openweathermap.org//img/w/${data?.weather?.[0]?.icon}.png`}
        />
        {data?.main?.temp}°C
      </h1>
      <p>{data?.weather?.[0].main}</p>
      <p>Humidity:{data?.main?.humidity}%</p>
      <p>Dew Point:24°C</p>
      <p>Visibility:{data?.visibility / 1000}km</p>
    </div>
  );
};

export default Card;

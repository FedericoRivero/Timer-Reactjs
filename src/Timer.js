import React from "react";
import { useState, useEffect } from "react";
import logo from "./sand-clock.svg";

const currentYear = new Date().getFullYear();

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = `December, 31, ${currentYear}`;

  useEffect(() => {
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

  const interval = setInterval(() => getTime(deadline), 1000);

  return () => clearInterval(interval);
}, [deadline]);

  return (
    <div className="timer">
      <div className="wrapper">
        <img src={logo} className="app-logo" alt="logo" />
      </div>

      <div className="col-4">
        <div className="box">
          <p id="day">{days < 10 ? "0" + days : days}</p>
        </div>
        <span className="text">Days</span>
      </div>

      <div className="col-4">
        <div className="box">
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
        </div>
        <span className="text">Hours</span>
      </div>

      <div className="col-4">
        <div className="box">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
        </div>
        <span className="text">Minutes</span>
      </div>

      <div className="col-4">
        <div className="box">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
        </div>
        <span className="text">Seconds</span>
      </div>
    </div>
  );
};

export default Timer;

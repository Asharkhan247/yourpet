import React, { useEffect, useState } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const nextYear = yyyy + 1;

    const targetDateStr = (today > new Date(`${yyyy}-12-12`) ? `${nextYear}` : `${yyyy}`) + "-12-12";
    const countdownDate = new Date(targetDateStr).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0")
      });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00"
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="countdown">
      <ul>
        <li><span>{timeLeft.days}</span> Days</li>
        <li><span>{timeLeft.hours}</span> Hours</li>
        <li><span>{timeLeft.minutes}</span> Minutes</li>
        <li><span>{timeLeft.seconds}</span> Seconds</li>
      </ul>
    </div>
  );
}

export default Countdown;
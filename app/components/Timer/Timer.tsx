import { useTimer } from "@/app/store";
import "./Timer.scss";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";

export const Timer = () => {
  const { setIsTimerToggled } = useTimer();
  const [time, setTime] = useState({ minutes: 0, seconds: 5 });
  const [startTimer, setStartTimer] = useState("Start");
  const intervalRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (startTimer === "Pause") {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => {
          const { minutes, seconds } = prevTime;
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(intervalRef.current!);
              return { minutes: 0, seconds: 0 };
            }
            return { minutes: minutes - 1, seconds: 59 };
          }
          return { minutes, seconds: seconds - 1 };
        });
      }, 1000);
    } else if (startTimer === "Start" && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => clearInterval(intervalRef.current!);
  }, [startTimer]);

  function handleStartTimer() {
    setStartTimer(prev => (prev === "Start" ? "Pause" : "Start"));
  }

  function handleResetTimer() {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
    setTime({ minutes: 0, seconds: 5 });
    setStartTimer("Start");
  }

  const { minutes, seconds } = time;

  return (
    <div className="timer-container widget-container">
      <div className="timer-header move">
        <p>Timer</p>
        <IoCloseSharp className="pointer scale" onClick={() => setIsTimerToggled(false)} />
      </div>
      <div className="timer-content">
        <p className="timer-content__time">
          {minutes}:{seconds.toString().length === 1 ? `0${seconds}` : seconds}
        </p>
      </div>
      <div className="timer-footer">
        <button onClick={handleStartTimer} className="pointer">
          {startTimer}
        </button>
        <button onClick={handleResetTimer} className="pointer">
          Reset
        </button>
        {minutes === 0 && seconds === 0 ? <audio preload="auto" autoPlay src="/music/done.wav"></audio> : ""}
      </div>
    </div>
  );
};

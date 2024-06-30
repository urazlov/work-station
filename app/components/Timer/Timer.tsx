import { useTimer } from "@/app/store";
import "./Timer.scss";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";

const SECONDS = 10;
const MINUTES = 0;

export const Timer = () => {
  const { setIsTimerToggled } = useTimer();

  const [time, setTime] = useState({ minutes: MINUTES, seconds: SECONDS });
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
              setStartTimer("Start");
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
    setTime({ minutes: MINUTES, seconds: SECONDS });
    setStartTimer("Start");
  }

  const { minutes, seconds } = time;

  const handleMinutesChanged = (increment: boolean) => {
    setTime(prevTime => ({
      ...prevTime,
      minutes: increment ? Math.min(prevTime.minutes + 1, 59) :  Math.max(prevTime.minutes - 1, prevTime.seconds ? 0 : 1)
    }));
  };

  const handleSecondsChanged = (increment: boolean) => {
    setTime(prevTime => ({
      ...prevTime,
      seconds: increment ? Math.min(prevTime.seconds + 1, 59) : Math.max(prevTime.seconds - 1, prevTime.minutes ? 0 : 1)
    }));
  };

  return (
    <div className="timer-container widget-container">
      <div className="timer-header move">
        <p>Timer</p>
        <IoCloseSharp className="pointer scale toggle" onClick={() => setIsTimerToggled(false)} />
      </div>
      <div className="timer-content">
        <div className="timer-content__inputs">
          <div className="timer-content__custom-input">
            <button onClick={() => handleMinutesChanged(false)}>-</button>
            <input readOnly type="number" value={minutes} name="minutes" min={0} max={59} />
            <button onClick={() => handleMinutesChanged(true)}>+</button>
          </div>
          <div className="timer-content__custom-input">
            <button onClick={() => handleSecondsChanged(false)}>-</button>
            <input readOnly type="number" value={seconds} name="seconds" min={0} max={59} />
            <button onClick={() => handleSecondsChanged(true)}>+</button>
          </div>
        </div>
        <p className="timer-content__time">
          {minutes}:{seconds.toString().padStart(2, '0')}
        </p>
      </div>
      <div className="timer-footer">
        <button onClick={handleStartTimer} className="pointer">
          {startTimer}
        </button>
        <button onClick={handleResetTimer} className="pointer">
          Reset
        </button>
        {minutes === 0 && seconds === 0 && <audio preload="auto" autoPlay src="/music/done.wav"></audio>}
      </div>
    </div>
  );
};

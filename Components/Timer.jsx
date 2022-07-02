import { useState, useEffect, useRef } from "react";

const STATUS = {
  STARTED: "Started",
};

const INITIAL_COUNT = 120;

export default function Timer() {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STARTED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

 
 
  const handleReset = () => {
    setSecondsRemaining(INITIAL_COUNT);
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
    
  );
  return (
    <div>
      <div>
        {secondsToDisplay !== 0 ? (
          <>
            {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
            {twoDigits(secondsToDisplay)}
          </>
        ) : (
          <></>
        )}
        <br />

        <p style={{ fontSize: "14px", textAlign: "center", flex: "1 1 auto" }}>
          Don’t receive code ? <button onClick={handleReset}>Re-send</button>
        </p>
      </div>
    </div>
  );
}


function useInterval(callback, delay) {
  const savedCallback = useRef();

 
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

 
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const twoDigits = (num) => String(num).padStart(2, "0");

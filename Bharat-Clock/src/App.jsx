import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("cancelled the interval");
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className="header">Bharat Clock</div>
        <div>
          <span className="slogan">
            This is the clock that shows the time in Bharat at all times.
          </span>
        </div>
        <div className="currTime">
          This is the current time: {time.toLocaleDateString()}
          {" -- "}
          {time.toLocaleTimeString()}
        </div>
      </div>
    </>
  );
}

export default App;

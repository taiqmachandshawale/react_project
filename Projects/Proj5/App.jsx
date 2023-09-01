import React, { useState } from "react";
import "./index.css";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [usedStates, setUsedStaes] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setUsedStaes(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="contaier">
      <h1>{usedStates}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
};

export default App;

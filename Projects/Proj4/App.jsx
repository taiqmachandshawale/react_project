import React, { useState } from "react";
import "./index.css";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [usedState, setUsedStates] = useState(newTime);
  const handleTime = () => {
    newTime = new Date().toLocaleTimeString();

    setUsedStates(newTime);
  };

  return (
    <div className="contanier">
      <h1>{usedState}</h1>
      <button className="button" onClick={handleTime}>
        {" "}
        Get Time
      </button>
    </div>
  );
};
export default App;

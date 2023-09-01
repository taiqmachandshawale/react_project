import React, { useState } from "react";
import "./index.css";

const App = () => {
  const Handle = () => {
    setUsedStates(usedStates + 10);
  };

  const [usedStates, setUsedStates] = useState(0);
  return (
    <div className="contanier">
      <h1>{usedStates}</h1>
      <button className="buton" onClick={Handle}>
        Click Me
      </button>
    </div>
  );
};

export default App;

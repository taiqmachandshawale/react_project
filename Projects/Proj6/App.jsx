import React, { useState } from "react";

const App = () => {
  const purple = "#8e44ad";
  const [usedState, setUsedState] = useState(purple);
  const [name, setName] = useState("click Me");
  const bgChnage = () => {
    let red = "#FF0000";
    setUsedState(red);
    setName("Ouch!! ");
  };

  const bgBack = () => {
    setUsedState(purple);
    setName("Ayyo !! 😠");
  };
  return (
    <div style={{ backgroundColor: usedState }}>
      <button onClick={bgChnage} onDoubleClick={bgBack}>
        {name}
      </button>
    </div>
  );
};
export default App;

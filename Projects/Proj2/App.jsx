import React from "react";
import SlotM from "../../src/SlotM";

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Welcome to <span>Slot machine game </span> 🎰
      </h1>

      <div className="slot_machine">
        <SlotM x="😄" y="😄" z="😄" />
        <hr />
        <SlotM x="😄" y="😏" z="😄" />
        <hr />
        <SlotM x="🍎" y="🍌" z="🍎" />
        <hr />
        <SlotM x="🤟" y="🤟" z="🤟" />
      </div>
    </>
  );
};

export default App;

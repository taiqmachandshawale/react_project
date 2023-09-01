import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a Items" />
        <button>+</button>

        <ol>
            <li>Buy Apple</li>
        </ol>
      </div>
    </div>
  );
};

export default App;

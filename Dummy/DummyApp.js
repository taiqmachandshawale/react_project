import React from "react";
import Heading from "../Dummy/Heading";
import Parah from "../Dummy/Parah";
import List from "../Dummy/List";
import { sum, sub, mul, div } from "../Dummy/Calculator";

const App = () => {
  return (
    <>
      {/* <Heading />
      <Parah />
      <List /> */}

      <Heading />

      <ol>
        <li>Sum of No:{sum(4, 5)}</li>
        <li>SUbtraction of No:{sub(5, 4)}</li>
        <li>Multiplication of No:{mul(4, 5)}</li>
        <li>Divison of NO:{div(20, 5)}</li>
      </ol>
    </>
  );
};

export default App;

import React from "react";
import Card from "./Card";

import Sdata from "./Sdata";

const App = () => {
  // console.log(Sdata[0].link);

  return (
    <>
      <h1 className="heading_style">List of top 3 Netflix series in 2023</h1>
      {Sdata.map((val, index) => {
        console.log(index);
        return (
          <Card
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </>
  );
};

export default App;

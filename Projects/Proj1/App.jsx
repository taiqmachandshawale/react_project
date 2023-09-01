import React from "react";
import Sdata from "../../src/Sdata";
import Card from "../../src/Card";
import Netflix from "../../src/Netflix";
import Amazon from "../../src/Amazon";

const App = () => {
  const favSeries = "netflix";

  return (
    <>
      <h1 className="heading_style">List of top 3 Netflix series in 2023</h1>

      {Sdata.map((val, index) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
      {/* <FavSeries /> */}

      {/* {favSeries === "netflix" ? <Netflix /> : <Amazon />} */}
    </>
  );
};

export default App;

{
  /* 
{Sdata.map((val, index) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })} */
}
// import Card from "./Card";

// import Sdata from "./Sdata";
// const FavSeries = () => {
//   if (favSeries == "netflix") {
//     return <Netflix />;
//   } else {
//     return <Amazon />;
//   }
// };

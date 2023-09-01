import React from "react";

const SlotM = (props) => {


  let { x, y, z } = props;

  //   x === y && y === z ? Matching : NotMatching;
  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}{" "}
          </h1>
          <h1> This is Matching.</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>
            {x} {y} {z}
          </h1>
          <h1> This is Not Matching</h1>
        </div>
      </>
    );
  }
};
// const Matching = () => {
//   return (
//     <>
//       <div className="slot_inner">
//         <h1>
//           {x} {y} {z}{" "}
//         </h1>
//         <h1> This is Matching.</h1>
//       </div>
//     </>
//   );
// };

// const NotMatching = () => {
//   return (
//     <>
//       <div className="" slot_inner>
//         <h1>
//           {x} {y} {x}
//         </h1>

//         <h1>This is Not Matching.</h1>
//       </div>
//     </>
//   );
// };

export default SlotM;

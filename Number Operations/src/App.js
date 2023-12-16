import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";
import "./App.css";
// import React from "react";
import { useState } from "react";

// function App() {
//   let numberA = 55;
//   let numberB = 66;
//   let numberC = 77;
//   return (
//     <>
//       <Component1 numberA={numberA} />
//       <Component2 numberB={numberB}/>
//       <Component3 numberC={numberC}/>
//     </>
//   );
// }

function App() {
  // const [myNumber, setMyNumber] = React.useState(0);
  const [myNumber, setMyNumber] = useState(0);
  const increase = () => {
    setMyNumber(myNumber + 1);
  };
  const decrease = () => {
    setMyNumber(myNumber - 1);
  };
  const makeZero = () => {
    setMyNumber(0);
  };
  return (
    <div id="grandParentDiv">
      <div id="parentDiv">
        <div id="childDiv1">{myNumber}</div>
        <div id="childDiv2">
          <Component1 increase={increase} />
          <Component2 decrease={decrease} />
          <Component3 makeZero={makeZero} />
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import StringComponent from "./StringComponent";
import { useState } from "react";
function App() {
  let [inputName, setInputName] = useState("");
  let changeInputName=()=> {
    
  } 
  return (
    <div id="bodyMainDiv">
      {/* <StringComponent /> */}
      <div id="mainDiv">
        <div id="inputDiv">
          Enter Your Name
          <input type="text"></input>
          <input type="button" value="Print"></input>
        </div>
        <div id="outputDiv">My Name is Rupali.</div>
      </div>
    </div>
  );
}

export default App;

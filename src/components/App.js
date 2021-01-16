import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [count,setCount]=useState(0);
  function showPara()
  {
    let a=count;
    a++;
    setCount(a);
  }
  return (
    <div id="main">
      <button id="click" onClick={showPara}>click</button>
    {count!==0?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:null}
    </div>
  );
}


export default App;

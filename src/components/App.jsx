import { useState } from "react";
import React from "react";

function App() {

  const startTime = new Date().toLocaleTimeString('it-IT');

  let [time, currentTime] = useState(startTime);

  function updateTime(){
    const newTime = new Date().toLocaleTimeString('it-IT');
    currentTime(newTime);
  }

  setInterval(updateTime, 1000)

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;

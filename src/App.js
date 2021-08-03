import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired")
  
  useEffect(() => {
    console.log(`It's ${emotion} around here.`)
  }, [emotion])

  useEffect(() => {
    console.log(`It's ${secondary} too!`)
  }, [secondary])

  return (
    <>
      <h1>Current emotion: {emotion}, and {secondary}</h1>
      <button onClick={ () => setEmotion("frustrated") }>
        Frustrate
      </button>
      <button onClick = { () => setEmotion("horny") }>
        Hornify
      </button>
      <button onClick = { () => setSecondary("energized") }>
        Secondary: Energized
      </button>
      <button onClick = { () => setSecondary("crabby") }>
        Secondary: Crabby
      </button>
    </>
  );
}

export default App;

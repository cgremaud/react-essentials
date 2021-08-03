import React, { useState } from "react";
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");
  
  return (
    <>
      <h1>Current emotion: {emotion}</h1>
      <button onClick={ () => setEmotion("frustrated") }>
        Frustrate
      </button>
      <button onClick = { () => setEmotion("horny") }>
        Hornify
      </button>
    </>
  );
}

export default App;

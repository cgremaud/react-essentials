import React, { useState, useEffect } from "react";
import './App.css';


  // https://api.github.com/users/cgremaud

function App({login}) {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError); //don't use setError(true)
  }, [login]) //passing [login] to the dependency array causes this to be called when the value of login changes. 
  
  if(loading) return <h1>Loading . . .</h1>
  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if(!data) return null

  return (<div className="container">
    <h1>{data.name}</h1>
    <p>{data.url} </p>
    <ul>
      <li>bro</li>
      <li>bro</li>
      <li>bro</li>
    </ul>
    <button className="btn-info">text</button>
    <img alt={data.name} src={data.avatar_url} />
  </div>)
  
}

export default App;

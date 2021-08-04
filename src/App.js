// import React, { useState, useEffect } from "react";
// import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404
} from "./pages"

  // https://api.github.com/users/cgremaud

function App() {
  
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   if(!login) return;
  //   setLoading(true);
  //   fetch(`https://api.github.com/users/${login}`)
  //     .then(response => response.json())
  //     .then(setData)
  //     .then(() => setLoading(false))
  //     .catch(setError); //don't use setError(true)
  // }, [login]) //passing [login] to the dependency array causes this to be called when the value of login changes. 
  
  // if(loading) return <h1>Loading . . .</h1>
  // if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  // if(!data) return null

  return (
  <div>
  <Switch>
    <Route path="/about" >
      <About />
    </Route>

  <Route path="/events" >
      <Events />
    </Route>

    <Route path="/contact" >
      <Contact />
    </Route>
  
    <Route exact path="/" >
      <Home />
    </Route>

    <Route component={Whoops404}></Route>

    {/* <Route path="*"  >
      <Whoops404 />
    </Route> */}
    </Switch>        
  </div>)
  
}

export default App;

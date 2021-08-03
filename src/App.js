import './App.css';

function SecretComponent() {
  return <h1> Super secret info for blah blah</h1>
}

function RegularComponent() {
  return <h1>Everyone can see this</h1>
}

function App(props) {
  return (
    <>
      {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

export default App;

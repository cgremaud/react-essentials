import './App.css';

function Header(props) {
  return(
    <header>
      <h1>{props.name}'s restaurant</h1>
    </header>
  )
}

function Main(props) {
  return(
    <section>
      <p>We got dat {props.adjective} food</p>
      <ul style = {{textAlign: "left"}}>
        {props.dishes.map((dish) => ( //use parens when returning an obj from a map func
          <li key = {dish.id}>{dish.title}</li>
          ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return(
    <footer>
      Copyright {props.year}
    </footer>
  )
}


const dishes = [
  "Halibut",
  "Spam and Eggs",
  "Creamed Cum",
  "Hot and Bothered Bagel"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }))




function App() {
  return (
    <div className="App">
      <Header name="Colyn" />
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;

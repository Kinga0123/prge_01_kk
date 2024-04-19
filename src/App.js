import "./App.css";
import Home from "./componets/home/Home";

function App() {
  const imie = "world";

  return (
    <div className="App">
      <Home text={imie} />
    </div>
  );
}

export default App;

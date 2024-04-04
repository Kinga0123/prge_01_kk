import "./App.css";

const lista_urzytkownikow = [
  { imie: "Kinga" },
  { imie: "Mateusz" },
  { imie: "Tomasz" },
  { imie: "Wiktoria" },
];
console.log(lista_urzytkownikow);

function App() {
  return (
    <div className="App">
      {lista_urzytkownikow.map((zolnierz) => {
        return <div>{zolnierz.imie}</div>;
      })}
    </div>
  );
}

export default App;

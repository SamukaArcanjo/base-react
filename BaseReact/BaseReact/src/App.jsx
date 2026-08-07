function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function App() {
  const animals = ["lion", "cow", "snake", "Lizard"];

  return (
    <div>
      <h1>Animals</h1>
      <List animals={animals} />
    </div>
  );
}

export default App;

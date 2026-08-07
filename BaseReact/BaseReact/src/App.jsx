function App() {
  const animals = ["lion", "cow", "snake", "Lizard"];
  return (
    <div>
      <h1>Animals</h1>
      <ul>
        {animals.map((animal) => {
          <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

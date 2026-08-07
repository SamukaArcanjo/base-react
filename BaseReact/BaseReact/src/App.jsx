function List(props) {
  return (
    <>
      {!props.animals ? (
        <div>Carregando....</div>
      ) : props.animals.length > 0 ? (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}> {animal} </li>;
          })}
        </ul>
      ) : (
        <div>Sorry, but we dont have animals</div>
      )}
    </>
  );
}

function App() {
  const animals = ["Lion", "cow", "snake", "Lizard"];

  return (
    <div>
      <h1>Animals</h1>
      <List animals={animals} />
    </div>
  );
}

export default App;

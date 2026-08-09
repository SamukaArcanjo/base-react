function List() {
  const animals = ["lion", "dog", "cat", "Rabbit"];
  return (
    <div>
      <h1>Animals</h1>
      <ul>
        {animals.map((animal) => {
          return animal.startsWith("l") ? (
            <li>{animal}</li>
          ) : (
            <li>`Sorry.The animal ${animal} not is letter L`</li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;

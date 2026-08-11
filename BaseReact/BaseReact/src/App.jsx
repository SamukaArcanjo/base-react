import { useState } from "react";

function App() {
  const [mostrar, setMostrar] = useState(false);
  const [value, setValue] = useState("");
  let type = "text";

  console.log(mostrar);
  return (
    <div>
      <input
        type={!mostrar ? "text" : "password"}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setMostrar(!mostrar)}> - </button>
    </div>
  );
}

export default App;

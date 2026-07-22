import { useState } from "react";

function AddTask({ addTaskOnClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-[#ffffff] flex flex-col rounded-md shadow">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-[#080825] outline-[#161663] px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-[#080825] outline-[#161663] px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o titulo e a descrição da tarefa");
          }
          addTaskOnClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-[#080825] text-white py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
